
//Variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winCount = 0
var lossCount = 0
var guessesLeft = 0
var guessedLetters = []
var defaultGuessesLeft = 7;

//press a button and game starts 
document.onkeyup=function(event){

  newGame();oneKeyPress
  generatesRndomLeter();oneKeyPress
  keyPressed();oneKeyPress
  resetGuesses();resetGuesses

}

//Game starts
function newGame() {
  resetGuesses();
  generateRandomLetter();
  console.log(randomLetter); 
  displayOnScreen("wins", `Wins: (document.git elementId wins`);
  displayOnScreen("losses", `Losses: (document.git elementId LoosesCount`);
  displayOnScreen("guessesleft", `Guesses Left: String(guessesLeft)}`);
}

//loop throught the array until guessed letter
for (var i = 0; i < randomLetter.length; i++) {
  console.log(letter[i]);
}
console.log();

function onKeyPress() {
  if (letters.includes(letter, 0) && guessedLetters.includes(letter, 0) === false) {
    guessesLeft--;
   
    if (String(letter) == String(randomLetter)) {
      winCount++;
      newGame();
    }
    if (guessesLeft === 0) {
      lossCount++;
      newGame();
    }
  }

}

//computer generates another random letter
function generateRandomLetter() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

//number of guesses left
function keyPressed(letter) {
  if (guessesLeft == 7) {
    document.getElementById("guessessofar") += letter;
  } else {
    document.getElementById("guessessofar").letter;
  }
}

//reset number of guesses
function resetGuesses() {
  guessesLeft = defaultGuessesLeft;
  resetGuesses();
}