/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');

// Start on click
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Start on enter
document.addEventListener('keyup', (e) => {

    if (e.keyCode === 13 && startButton.parentNode.style.display === '') {
        game = new Game();
        game.startGame();
    }
});