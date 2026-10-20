const {filterSkillsByCategory, calculateTotalCost} = require('../skillswap-functions.js');

const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];

//#region Tests for filterSkillsByCategory(skills,category)
describe("Filter by Categories", () => {
    test("should return skills with only the category inputted", () => {
        expect(filterSkillsByCategory(skills,"Programming")).toStrictEqual(
            [
                { title: 'Python Tutoring', category: 'Programming', price: 20 },
                { title: 'Web Development', category: 'Programming', price: 25 }
            ]
        )
        expect(filterSkillsByCategory(skills,"Music")).toStrictEqual(
            [
                { title: 'Guitar Lessons', category: 'Music', price: 15 }
            ]
        )
    });

    test("should return every skill if category is 'all'", () => {
        expect(filterSkillsByCategory(skills,"all")).toStrictEqual(
            [
                { title: 'Python Tutoring', category: 'Programming', price: 20 },
                { title: 'Guitar Lessons', category: 'Music', price: 15 },
                { title: 'Resume Review', category: 'Career', price: 0 },
                { title: 'Web Development', category: 'Programming', price: 25 }
            ]
        )
    });

    test("should return an empty array if no skills match category", () => {
        expect(filterSkillsByCategory(skills,"Art")).toStrictEqual(
            [
            ]
        )
        expect(filterSkillsByCategory(skills,"")).toStrictEqual(
            [
            ]
        )
    });
});
//#endregion

//#region Tests for calculateTotalCost(hourlyRate,hours)
describe("Calculate total cost", () => {
    test("should work for different hours and rates, including decimals", () => {
        expect(calculateTotalCost(20,2)).toBe(40.0.toFixed(2));
        expect(calculateTotalCost(1000,1000)).toBe(1000000.0.toFixed(2));
        expect(calculateTotalCost(12.5,3.5)).toBe(43.75.toFixed(2));
        expect(calculateTotalCost(1.1,1.1)).toBe(1.21.toFixed(2));
    });

    test("should return zero if hourlyRate or price is 0", () => {
        expect(calculateTotalCost(0,1.11)).toBe(0.0.toFixed(2));
        expect(calculateTotalCost(15.25,0)).toBe(0.0.toFixed(2));
        expect(calculateTotalCost(0,0)).toBe(0.0.toFixed(2));
    });

    test("should round to 2 decimal places", () => {
        expect(calculateTotalCost(1.11,1.11)).toBe(1.23.toFixed(2));
        expect(calculateTotalCost(15.25,1.25)).toBe(19.06.toFixed(2));
        expect(calculateTotalCost(12.25,3.5)).toBe(42.88.toFixed(2));
    });

    test("should throw an error if either input is negative", () => {
        expect(() => calculateTotalCost(-1.1,1.1)).toThrow(Error);
        expect(() => calculateTotalCost(-1.1,-1.1)).toThrow(Error);
        expect(() => calculateTotalCost(1.1,-1.1)).toThrow(Error);
    })
});
//#endregion