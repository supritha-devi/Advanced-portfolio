/* =====================================================
   SUPRITHADEVI PORTFOLIO
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen =
        navLinks.classList.contains("active");

    menuToggle.textContent =
        isOpen ? "✕" : "☰";

});


/* Close menu when a navigation link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* ================= DARK MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


/* Apply saved theme */

if (savedTheme) {

    document.documentElement
        .setAttribute(
            "data-theme",
            savedTheme
        );

    updateThemeIcon(savedTheme);

}


/* Otherwise check system preference */

else {

    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    if (prefersDark) {

        document.documentElement
            .setAttribute(
                "data-theme",
                "dark"
            );

        updateThemeIcon("dark");

    }

}


/* Theme button */

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement
            .getAttribute("data-theme");


    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";


    document.documentElement
        .setAttribute(
            "data-theme",
            newTheme
        );


    localStorage.setItem(
        "portfolio-theme",
        newTheme
    );


    updateThemeIcon(newTheme);

});


/* Change theme icon */

function updateThemeIcon(theme) {

    if (theme === "dark") {

        themeToggle.textContent = "☀";

    } else {

        themeToggle.textContent = "☾";

    }

}


/* ================= FOOTER YEAR ================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= SCROLL REVEAL ================= */

/*
   Adds a subtle reveal effect when sections
   enter the screen.
*/

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .achievement-card"
    );


const observer =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});