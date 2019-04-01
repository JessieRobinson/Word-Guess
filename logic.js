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
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

// console log

console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    var isLetterInWord = false;
    if(selectedWor[i] == letter) {
    isLetterInWord = true;
    }
}

if(isLetterInWord) {
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}

else {
    wrongLetters.push(letter);
    numGuesses--
}
console.log(blanksAndSuccesses);

// check if win
if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("Congrats You WON!");
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
}

// check if lose
else if(numGuesses == 0) {
    lossCount++;
    alert("You lost!");
    document.getElementById("lossCounter").innerHTML = lossCount;
}



function.roundComplete(){
    console.log("Wine Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);
}

//Main Process

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    roundComplete;
    
    
    console.log(letterGuessed);

}
