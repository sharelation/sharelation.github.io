window.addEventListener("scroll", () => {
    headercolor();
});

function headercolor() {
    let y = window.scrollY;
    const nav = header.querySelector("nav");
    if (y >= 0 && y <= 300) {
        header.style.background = `rgba(248, 247, 245, ${y / 300})`;
        for (let i = 0; i < document.getElementById("navancher").children.length; i++) {
            document.getElementById("navancher").children[i].style.color = `hsl(0, 0%, ${100 - (y / 3)}%)`;
        }
    } else if (y > 300) {
        header.style.background = "rgba(248, 247, 245, 1)";
        for (let i = 0; i < document.getElementById("navancher").children.length; i++) {
            document.getElementById("navancher").children[i].style.color = "hsl(0, 0%, 0%)";
        }
    }
}