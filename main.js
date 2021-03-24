//navbar
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Event listeners
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('bar-change');
})

// Sticky navbar
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', scrollY > 0)
})


//greeting
let myDate = new Date();
    let hrs = myDate.getHours();

    let=greetings;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('greetings').innerHTML =
        '<b>' + greet + '</b>';