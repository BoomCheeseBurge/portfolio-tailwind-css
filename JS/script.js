
// NAVBAR

window.onscroll = () => {
    const header = document.querySelector('header');

    // Get the spacing of the header position against the top viewport
    // This spacing increases as the mouse wheel is scrolled downwards (and by default 0 at the top)
    const fixedNav = header.offsetTop;

    const toTop = document.querySelector('#to-top');

    // Check
    if(window.scrollY > fixedNav)
    {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else
    {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
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

// ------------------------------

// Clode hamburger outside nav menu
window.addEventListener('click', (e) => {
    if(e.target != hamburger && e.target != navMenu)
    {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// ------------------------------

// Toggle mode
const modeToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

modeToggle.addEventListener('click', () => {
    if (modeToggle.checked)
    {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else
    {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Move toggle if dark mode upon refresh
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    modeToggle.checked = true;
} else {
    modeToggle.checked = false;
}

