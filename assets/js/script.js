const menuHamburger = document.querySelector(".Menu")
const navLinks = document.querySelector("nav ul")
const navLinks2 = document.querySelector("nav")


menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    navLinks2.classList.toggle('mobile-menu')
})

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('preferred-language') || 
                       (navigator.language.split('-')[0] === 'fr' ? 'fr' : 'en');
    
    const langButtons = document.querySelectorAll('.lang-switch');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});