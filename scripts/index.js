localStorage.setItem("theme", "light");
const body = document.body;
const themeBtn = document.querySelector("#theme-toggle");
const navLinks = document.querySelector(".nav-links");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    navLinks.classList.toggle("light");

    if (body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

const mobileThemeBtn = document.getElementById("mobile-theme-toggle");

mobileThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    navLinks.classList.toggle("light");

    if (body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";          // Desktop button
        mobileThemeBtn.textContent = "☀️";    // Mobile button
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        mobileThemeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});





window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const burger = document.getElementById("burger");

// Toggle menu
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("show");
});
