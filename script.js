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
                        <p class="skill-card-details"><strong>Price:</strong> $${this.price}</p>
                        <p class="skill-card-details"><strong>Provider:</strong> ${this.tutor}</p>
                        <p class="skill-card-extra"<strong>Session details:</strong>Detail Placeholder</p>
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
skills.forEach((skill) => {
    skillCardContainer.insertAdjacentHTML("beforeend",skill.getHTML());
});

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