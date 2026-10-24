//#region Filter Skills Code
function filterSkillsByCategory(skills, category) {
    if(skills == null) {
        throw new Error("Argument Exception, skills is null.");
    }
    if(category == null) {
        throw new Error("Argument Exception, category is null.");
    }

    if(category.toLowerCase() === "all") {
        return skills;
    }

    let filteredSkills = [];
    skills.forEach((skill) => 
        { if(skill.category.toLowerCase() === category.toLowerCase()) {
            filteredSkills.push(skill);
        }
    })

    return filteredSkills;  
}
//#endregion

//#region calculate total cost code 
function calculateTotalCost(hourlyRate,hours) {
    if(hourlyRate < 0.0) {
        throw new Error("Argument error, hourlyRate is negative.");
    }
    if(hours < 0.0) {
        throw new Error("Argument error, hours is negative.");
    }

    return (hourlyRate * hours).toFixed(2);
}
//#endregion

//#region match skills to user code
function matchSkillsToUser(userNeeds,skills) {
<<<<<<< HEAD
    let arrayToReturn = [];
=======
    arrayToReturn = [];
>>>>>>> da5deda (Wrote function for matching user needs and performed successful tests on it.)

    skills = filterSkillsByCategory(skills,userNeeds.category);

    skills.forEach((skill) => {
        if(skill.price <= userNeeds.price) {
            arrayToReturn.push(skill);
        }
    })

    return arrayToReturn;
}
//#endregion

<<<<<<< HEAD
//module.exports = {filterSkillsByCategory, calculateTotalCost, matchSkillsToUser};
export {filterSkillsByCategory, calculateTotalCost, matchSkillsToUser};
=======
module.exports = {filterSkillsByCategory, calculateTotalCost, matchSkillsToUser};
//export {filterSkillsByCategory, calculateTotalCost, matchSkillsToUser};
>>>>>>> da5deda (Wrote function for matching user needs and performed successful tests on it.)
