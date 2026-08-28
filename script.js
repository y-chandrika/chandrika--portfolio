const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});