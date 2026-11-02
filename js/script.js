
const filterButtons = document.querySelectorAll(".filter-btn");
const archiveCards = document.querySelectorAll(".archive-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selected = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.toggle("active", btn === button);
        });

        archiveCards.forEach(card => {
            card.hidden =
                selected !== "all" &&
                card.dataset.set !== selected;
        });
    });
});

/* LINK STORY CARDS TO DETAIL PAGE */

document.querySelectorAll(".archive-card").forEach(card => {
    const image = card.querySelector("img");

    if (!image) return;

    const match = image.src.match(/\/(base\d+)\/(\d+)\.png$/);

    if (!match) return;

    const cardId = match[1] + "-" + match[2];

    const link = document.createElement("a");

    link.href = "collection.html?card=" + cardId;
    link.setAttribute(
        "aria-label",
        "ดูรายละเอียด " + image.alt
    );

    image.parentNode.insertBefore(link, image);
    link.appendChild(image);
});
