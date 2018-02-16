// Creates an array that lists out all of the letters of the alphabet.
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables of wins, losses, and guesses left. Wins and losses start at 0.  Guesses start at 9.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  //Populates the array for Guesses so far:
  lettersGuessed.push(userGuess);

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerSelects = computerOptions[Math.floor(Math.random() * computerOptions.length)];


  // This determines wins, losses, remaining guesses and resets guesses so far.
  if (userGuess === computerSelects) {
    wins++;
    guessesLeft = 9;
    lettersGuessed = [];
  } else {
    guessesLeft--;
  }
  if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    lettersGuessed = [];
  }

  //Embeds the tallies of wins, losses, guesses left and guesses so far into html file.
  document.getElementById('wins').innerHTML = + wins;
  document.getElementById('losses').innerHTML = + losses;
  document.getElementById('guessesLeft').innerHTML = + guessesLeft;
  document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(' , ');
}