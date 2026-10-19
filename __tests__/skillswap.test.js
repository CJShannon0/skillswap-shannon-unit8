const {filterSkillsByCategory} = require('../skillswap-functions.js');

const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];

//Tests for filterSkillsByCategory(skills,category)
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