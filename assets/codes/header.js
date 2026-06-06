const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    headercolor();
});

setInterval(headercolor, 1000);

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

let navopen = false;
addEventListener("click", (e) => {
    if (e.target.id == "hamburger" || e.target.parentElement.id == "hamburger") {
        const navancher = document.getElementById("navancher");
        if (navancher.classList.contains("startancher")) {
            navancher.classList.remove("startancher");
        }
        if (navopen) {
            for (let i = 0; i < navancher.children.length; i++) {
                navancher.children[i].classList.remove("grownancher");
            }
            header.classList.remove("grownheader");
            void header.offsetWidth;
            for (let i = 0; i < navancher.children.length; i++) {
                navancher.children[i].classList.add("shrunkancher");
            }
            header.classList.add("shrunkheader");
        } else {
            for (let i = 0; i < navancher.children.length; i++) {
                navancher.children[i].classList.remove("shrunkancher");
            }
            header.classList.remove("shrunkheader");
            void header.offsetWidth;
            for (let i = 0; i < navancher.children.length; i++) {
                navancher.children[i].classList.add("grownancher");
            }
            header.classList.add("grownheader");
        }
        navopen = !navopen;
    }
});

async function opennav() {
    
}