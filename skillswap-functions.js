// Filter Skills Code
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

//module.exports = {filterSkillsByCategory};
export {filterSkillsByCategory};