const part1 = document.querySelectorAll(".left1");  // Use class selector

document.addEventListener("scroll", function() {
    part1.forEach((paragraph) => {
        if (IsinView(paragraph)) {
            paragraph.classList.add("left1--visible");
        }
    });
});

function IsinView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 320)
    );
}
