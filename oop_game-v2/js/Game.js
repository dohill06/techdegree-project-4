/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    startGame() {

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

    getRandomPhrase() {

    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }

}