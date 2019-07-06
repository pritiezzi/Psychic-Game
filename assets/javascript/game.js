var wins = 0;
var losses = 0;
var guessesLeft = 9;
// array for user's guesses
var guessedLetters = [];
var userGuess = null;
///Letter choices available
var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log('key'); 

// var wins = 0;
// var losses = 0;
// var guessesLeft = 9;
// // array for user's guesses
// var guessedLetters = [];
// var userGuess = "null";
// ///Letter choices available
// var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// console.log('key');
//     console.log('event.key: ', event.key);
// document.onkeyup = function(event) {
  
//     var userGuess = event.key;
//     document.getElementById("guesses-made").innerHTML =  event.key;

//      indexOf locates values in an array
//     if (guessedLetters.indexOf(userGuess) < 0 && alphabetChoices.indexOf(userGuess) >= 0) {
//         console.log('inside first if/else');
//         guessedLetters[guessedLetters.length] = userGuess;
//         guessesLeft--;
//         document.getElementById("guesses-made").innerHTML += event.key;
//     }

//      // == checks if a value is equal to another value
//     if (computerGuess == guessedLetters) {
//         console.log('inside second');

//         wins++;
//         document.getElementById("losses").innerHTML += event.key;
//         console.log("Wins: " + wins + " Losses: " + losses + " Guesses Made: " + guesses-made + " guessedLetters " + guessedLetters);

    
//     if (guessesLeft == 0) {

//         console.log('inside third');

//         losses++;
//         guessesLeft = 9;
//         guessedLetters = [];
//         computerGuess = alphabetChoices[Math.floor(Math.random() * (alphabetChoices.length))];
//         document.getElementById("guesses-left").innerHTML += event.key;
//         console.log("Wins: " + wins + " Losses: " + losses + " Guesses Made: " + guesses-made + " guessedLetters " + guessedLetters);    
//      }   
// };