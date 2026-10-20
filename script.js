import {filterSkillsByCategory,calculateTotalCost } from "./skillswap-functions.js";

//#region Filter Skills Code
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

let skillCardContainer = document.getElementById("offerings-grid");
printSkillCards(skills);

let filterSearch = document.getElementById("filter-search");
document.getElementById("filter-button").addEventListener("click", () => {
    clearSkillCards();
    let filteredList = filterSkillsByCategory(skills,filterSearch.value);
    printSkillCards(filteredList);
});
document.getElementById("reset-filter-button").addEventListener("click", () => {
    clearSkillCards();
    filterSearch.value = "";
    let unfilteredList = filterSkillsByCategory(skills,'all');
    printSkillCards(unfilteredList);
});

function printSkillCards(skillArray) {
    skillArray.forEach((skill) => {
        skillCardContainer.insertAdjacentHTML("beforeend",skill.getHTML());
    });
}
function clearSkillCards() {
    skillCardContainer.innerHTML = "";
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
