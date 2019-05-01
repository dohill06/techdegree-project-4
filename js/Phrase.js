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

    // Checks if passed letter is in phrase
    //  @param (string) letter - Letter to check

    checkLetter(letter) {
        let bool = this.phrase.includes(letter);
        return bool;
    }

    //  Displays passed letter on screen after a match is found
    //  @param (string) letter - Letter to display

    showMatchedLetter(letter) {
        const phraseLi = document.getElementsByClassName(letter);

        for (let list of phraseLi) {
            list.classList.replace('hide', 'show');
        }
    }
}