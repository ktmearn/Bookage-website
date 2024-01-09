
//Javascript for Toggle Menu
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "100%";
}

//Reveal element on page loading

const logo = document.querySelector(".logo")
const Nav = document.querySelector(".nav-links")

window.addEventListener("load", () => {
    logo.style.transform = "translateX(0)";
    Nav.style.transform = "translateX(0)";
});
