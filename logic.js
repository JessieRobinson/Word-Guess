//Global Variables

var wordOptions = ["love","time","luck","live"];
var selectedWord ="";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



// Functions

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i=0; i,numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");

// console log

console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

}



//Main Process
