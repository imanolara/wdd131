// scripts/temples.js

// --- Footer Logic ---

// 1. Get current year for the span#currentYear
const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// 2. Get last modified date for the p#lastModified
const lastModifiedParagraph = document.querySelector('#lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = `Last Modification: ${lastModifiedDate}`;


// --- Hamburger Menu Logic ---

const menuButton = document.querySelector('#menuButton');
const mainNav = document.querySelector('#mainNav');

// 1. Add a 'click' event listener to the button
menuButton.addEventListener('click', () => {
    
    // 2. Toggle the 'menu-open' class on the navigation
    mainNav.classList.toggle('menu-open');
    
    // 3. Change the button text from ☰ to X and back
    if (menuButton.textContent === '☰') {
        menuButton.textContent = 'X';
    } else {
        menuButton.textContent = '☰';
    }
});