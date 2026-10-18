const setCardExpanded = (card, expanded) => {
    card.classList.toggle("is-expanded", expanded);
};

const toggleCardCollapsed = (card) => {
    card.classList.toggle("is-collapsed");
};

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
