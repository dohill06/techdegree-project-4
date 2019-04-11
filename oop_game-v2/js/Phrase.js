/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Display phrase on game board

    addPhraseToDisplay() {
        const phrase = this.phrase;
        const phraseChars = document.querySelector('#phrase ul');

        for (let char of phrase) {
            const li = document.createElement('li');
            if (char === ' ') {
                li.classList.add('space');
                li.textContent = char;
                phraseChars.appendChild(li);
            } else {
                li.classList.add('hide', 'letter', char);
                li.textContent = char;
                phraseChars.appendChild(li);
            }
        }
    }

    checkLetter(letter) {
        let bool = this.phrase.includes(letter);
        return bool;
    }

    showMatchedLetter(letter) {

    }
}