const burger = document.querySelector('.burger');// Select the burger icon
        const navLinks = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {// Add click event listener to the burger icon
            navLinks.classList.toggle('nav-active');// Toggle the navigation links
            burger.classList.toggle('toggle');// Animate the burger icon
        });


// creation d'animation d'apparition des elements de la navbar
const navItems = document.querySelectorAll('.nav-links li');    
navItems.forEach((item, index) => {
    item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});
