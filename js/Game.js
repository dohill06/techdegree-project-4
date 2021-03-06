/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.count = 6;
    }

    // Begins game by selecting a random phrase and displaying it to user

    startGame() {
        const page = document.querySelector('body');
        const overlay = document.querySelector('#overlay');
        page.removeAttribute('style');
        overlay.className = 'start';
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

    //   Handles onscreen keyboard clicks and button entry
    //   @param(button) The clicked element OR button entry

    handleInteraction(button) {
        if (this.activePhrase.checkLetter(button)) {
            this.activePhrase.showMatchedLetter(button);
            const keys = document.querySelectorAll('.key');
            const page = document.querySelector('body');
           
            for (let char of keys) {
                if (char.textContent === button) {
                    char.classList.replace('key', 'chosen');
                    page.style.backgroundColor = this.rgbaShift(120, 207, 130, this.checkForChosen());
                    if (this.checkForWin()) {
                        this.gameOver(true);
                    }
                }
            }
        } else {
            const keys = document.querySelectorAll('.key');
            const page = document.querySelector('body');
                               
            for (let char of keys) {
                if (char.textContent === button) {
                    char.classList.replace('key', 'wrong');
                    this.removeLife();
                    this.count--;
                    page.style.backgroundColor = this.rgbaShift(217, 69, 69, this.count);
                    
                }
            }
        }
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

    //  Displays game over message and resets game with startOver method
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

        this.startOver();
    }

    // resets game board at end of game

    startOver() {
        this.missed = 0;
        this.count = 6;
        const phraseChars = document.querySelector('#phrase ul');
        const chosen = document.querySelectorAll('.chosen');
        const wrong = document.querySelectorAll('.wrong');
        const hearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
        
        while (phraseChars.hasChildNodes()) {
            phraseChars.removeChild(phraseChars.firstElementChild);
        }
        
        for (let char of chosen) {
            char.classList.replace('chosen', 'key');
        }

        for (let char of wrong) {
            char.classList.replace('wrong', 'key');
        }

        for (let char of hearts) {
            char.src = 'images/liveHeart.png';
        }
    }

    // Shifts body element color based on right or wrong answers
    // @return {rgba} Returns rgba value

    rgbaShift(r, g, b, a) {
        let opacity = 1/a;
        opacity.toPrecision(6);
        return `rgba(${r},${g},${b},${opacity})`
    }

    // Checks for elements in phrase with the 'hide' class for use in the 'right' rgba
    // @return {.hide.length} Returns the number of elements with the 'hide' class

    checkForChosen() {
        const phraseLi = document.getElementsByClassName('hide');
        return phraseLi.length;
    }

}