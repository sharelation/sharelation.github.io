let header = document.querySelector("header");
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