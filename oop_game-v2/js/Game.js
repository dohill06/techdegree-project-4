/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    // Begins game by selecting a random phrase and displaying it to user

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // Creates phrases for use in game
    // @return {array} An array of phrases that could be used in the game

    createPhrases() {
        const phraseArray = [
            new Phrase('I drink your milkshake'),
            new Phrase('A diamond in the rough'),
            new Phrase('Accidents will happen'),
            new Phrase('Down in the dumps'),
            new Phrase('Fire walk with me')
        ];

        return phraseArray;
    }

    // Selects random phrase from phrases property
    // @return {Object} Phrase object chosen to be used

    getRandomPhrase() {
        let phraseIndex = Math.floor(Math.random() * 5);
        return this.phrases[phraseIndex];
    }

    handleInteraction() {

    }

    // Increases the value of the missed property
    // Removes a life from the scoreboard
    // Checks if player has remaining lives and ends game if player is out

    removeLife() {
        const hearts = document.querySelector('img[src="images/liveHeart.png"]');
        hearts.src = 'images/lostHeart.png';
        this.missed++;

        if (this.missed === 5) {
            this.gameOver();
        }
    }

    //  Checks for winning move
    // @return {boolean} True if game is won, false if game wasn't 

    checkForWin() {
        const phraseLi = document.getElementsByClassName('hide');
        return phraseLi.length === 0;
    }

    //  Displays game over message
    //  @param {boolean} gameWon - Whether or not the user won the game

    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');

        if (gameWon) {
            overlay.style.display = '';
            overlay.classList.replace('start', 'win');
            gameOverMessage.textContent = 'Great job, you won!';
        } else {
            overlay.style.display = '';
            overlay.classList.replace('start', 'lose');
            gameOverMessage.textContent = 'Next time you\'ll do better!';
        }
    }

}