import {filterSkillsByCategory,calculateTotalCost, matchSkillsToUser} from "./skillswap-functions.js";

//#declaration of skill class and database
class Skill {
    constructor(title, category, tutor, price) {
        this.title = title;
        this.category = category;
        this.tutor = tutor;
        this.price = price;
    }

    getHTML() {
        return `<article class="skill-card" tabindex="0">
                    <button class="skill-card-collapse" type="button" aria-label="Hide offering">&minus;</button>
                    <div class="skill-card-content" id="${this.tutor}-${this.title}">
                        <h3>${this.title}</h3>
                        <p class="skill-card-details"><strong>Category:</strong> ${this.category}</p>
                        <p class="skill-card-details"><strong>Price:</strong> $${this.price}</p>
                        <p class="skill-card-extra"><strong>Provider:</strong> ${this.tutor}</p>
                    </div>
                </article>`;
    }
}

const skills = [
    new Skill('Python Tutoring','Programming','Person 1', 20),
    new Skill('Guitar Lessons','Music','Person 2', 15),
    new Skill('Resume Review','Career','Person 3', 0),
    new Skill('Web Development','Programming','Person 1', 25) 
];

//#region Filter Skills Code
let skillCardContainer = document.getElementById("offerings-grid");
printSkillCards(skills);

let filterSearch = document.getElementById("filter-search");
document.getElementById("filter-button").addEventListener("click", () => {
    clearSkillCards();
    let filteredList = filterSkillsByCategory(skills,filterSearch.value);
    printSkillCards(skillCardContainer, filteredList);
});
document.getElementById("reset-filter-button").addEventListener("click", () => {
    clearSkillCards(skillCardContainer);
    filterSearch.value = "";
    let unfilteredList = filterSkillsByCategory(skills,'all');
    printSkillCards(skillCardContainer, unfilteredList);
});

function printSkillCards(container, skillArray) {
    skillArray.forEach((skill) => {
        container.insertAdjacentHTML("beforeend",skill.getHTML());
    });
}
function clearSkillCards(container) {
    container.innerHTML = "";
}
//#endregion

//#region Highlight on hover code
document.querySelectorAll(".skill-card").forEach((card) => {
    const content = card.querySelector(".skill-card-content");
    const collapseButton = card.querySelector(".skill-card-collapse");
    if (!content || !collapseButton) {
        return;
    }

    card.addEventListener("pointerenter", () => {
        setCardExpanded(card, true);
    });

    card.addEventListener("pointerleave", () => {
        setCardExpanded(card, false);
    });

    card.addEventListener("focusin", () => {
        setCardExpanded(card, true);
    });

    card.addEventListener("focusout", (event) => {
        if (!card.contains(event.relatedTarget)) {
            setCardExpanded(card, false);
        }
    });

    collapseButton.addEventListener("click", () => {
        toggleCardCollapsed(card);
        setCardExpanded(card, false);
    });
});

const setCardExpanded = (card, expanded) => {
    card.classList.toggle("is-expanded", expanded);
};

const toggleCardCollapsed = (card) => {
    card.classList.toggle("is-collapsed");
};
//#endregion

//#region Cost Calculator Code
let result = document.getElementById("cost-calculator-result");

document.getElementById("calculate-cost-button").addEventListener("click",() => {
    let rate = document.getElementById("hourly-rate").value;
    let hours = document.getElementById("session-hours").value;
    if(rate == null || hours == null) return;

    result.value = "$" + calculateTotalCost(rate,hours);
})    
//#endregion

//#region MatchUserToSkills
let matchListContainer = document.getElementById("match-results-content");

document.getElementById("match-results-button").addEventListener("click",() => {
    let userNeeds = {
        category: document.getElementById("match-category").value,
        price: document.getElementById("match-max-price").value
    };
    if(rate == null || hours == null) return;

    let filteredList = matchSkillsToUser(userNeeds,skills);
    printSkillCards(matchListContainer, filteredList);
})    
//#endregion