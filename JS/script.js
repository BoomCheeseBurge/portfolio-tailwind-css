
// NAVBAR

window.onscroll = () => {
    const header = document.querySelector('header');

    // Get the spacing of the header position against the top viewport
    // This spacing increases as the mouse wheel is scrolled downwards (and by default 0 at the top)
    const fixedNav = header.offsetTop;

    // Check
    if(window.scrollY > fixedNav)
    {
        header.classList.add('navbar-fixed');
    } else
    {
        header.classList.remove('navbar-fixed');
    }
}

// ------------------------------

// Hamburger Script
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})