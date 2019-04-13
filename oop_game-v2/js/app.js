/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');
const key = document.querySelector('#qwerty');
const btnMessage = document.createElement('p');

// Added warning for wrong entry key
btnMessage.textContent = 'Use only lowercase letters!';
btnMessage.style.color = 'transparent';
key.appendChild(btnMessage);


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

// Added on screen key listener
key.addEventListener('click', (e) => {
    game.handleInteraction(e.target.textContent);
});

// Added keyboard listener and warning for wrong entry key
document.addEventListener('keydown', (e) => {

    if (startButton.parentNode.style.display === 'none') {
        if (/^[a-z]$/.test(e.key)) {
            btnMessage.style.color = 'transparent';
            game.handleInteraction(e.key);
        } else if (startButton.parentNode.style.display === 'none') {
            btnMessage.style.color = 'red';
        }
    }

});