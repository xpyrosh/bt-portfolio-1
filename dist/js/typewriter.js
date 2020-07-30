// define function that takes in three elements, the actual text element, words and wait time
const TypeWriter = function(txtElement, words, wait = 3000){
    // define variables
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
    // console.log('hello');

    // Tried to deviate and do it differently, got weird results
    // if (this.txt.length == fullTxt.length) {
    //     this.txt = this.words.shift();
    //     this.words.push(this.txt);
    //     this.txt = '';
    // } else {
        
    // }

    // Current index of word
    const current = this.wordIndex % this.words.length;

    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
        // Remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        // Add character
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Causes pause at end of typing
        typeSpeed = this.wait;
        // Set delete status
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word index
        this.wordIndex++;
        typeSpeed = 500;
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`


    // Repeats this method every .5s
    setTimeout(() => this.type(), typeSpeed);
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    // need to use JSON.parse or else it just returns a string
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init Typewriter
    new TypeWriter(txtElement, words, wait);
}