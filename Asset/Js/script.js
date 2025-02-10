const menuHamburger = document.querySelector(".Menu")
const navLinks = document.querySelector("nav ul")
const navLinks2 = document.querySelector("nav")


menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    navLinks2.classList.toggle('mobile-menu')
})