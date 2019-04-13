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

    removeLife() {

    }

    //  Checks for winning move
    // @return {boolean} True if game is won, false if game wasn't 

    checkForWin() {
        const phraseLi = document.getElementsByClassName('hide');
        return phraseLi.length === 0;
    }

    gameOver() {

    }

}