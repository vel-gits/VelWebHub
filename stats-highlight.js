// stats-highlight.js

const statCards = document.querySelectorAll('.stat-card');
let currentIndex = 0;

function rotateHighlight() {
    statCards.forEach(card => card.classList.remove('highlight')); // remove previous highlight
    statCards[currentIndex].classList.add('highlight'); // add highlight to current card
    currentIndex = (currentIndex + 1) % statCards.length; // next card
}

setInterval(rotateHighlight, 2000); // rotate every 2 seconds
rotateHighlight(); // initial highlight
