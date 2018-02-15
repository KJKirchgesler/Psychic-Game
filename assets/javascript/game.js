// Creates an array that lists out all of the letters of the alphabet.
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables of wins, losses, and guesses left. Wins and losses start at 0.  Guesses start at 9.
var wins = 0;
var losses = 0;
var guessesLeft = 9;


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerSelects = computerOptions[Math.floor(Math.random() * computerOptions.length)];


  // This determines wins, losses and remaining guesses.
  if (userGuess === computerSelects) {
    wins++;
    } else {
    guessesLeft--;
    }
  if (guessesLeft === 0) {
    losses++
  }

  // Creates variable for HTML to keep track of wins, losses and guesses left.
  var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>"; +
    "<p>Guesses: " + guessesLeft + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
}