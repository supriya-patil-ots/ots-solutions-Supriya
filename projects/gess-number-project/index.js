let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector(".lowOrHi");

// Main Function
function checkGuess() {
  let guess = parseInt(document.getElementById("guessField").value);

  console.log(previousGuesses);

  if (guess === randomNumber) {
    alertMsg = "You guessed it Correctly!!! You won!!!";
    document.getElementById("lowOrHi").innerHTML = alertMsg;
    document.getElementById("lowOrHi").style.color = "green";
  } else if (guess > randomNumber) {
    numberOfAttempts--;
    alertMsg = "You guessed it more!";
    document.getElementById("lowOrHi").innerHTML = alertMsg;
  } else {
    numberOfAttempts--;
    alertMsg = "You guessed it less!";
    document.getElementById("lowOrHi").innerHTML = alertMsg;
  }
  previousGuesses.push(guess);
  document.getElementById("lastResult").innerHTML = numberOfAttempts;
  console.log(numberOfAttempts);
  const guessSlot = document.querySelector(".guesses");
  document.getElementById("guesses").innerHTML = previousGuesses;
  const guessesRemaining = document.querySelector(".lastResult");

  if (numberOfAttempts <= 0 || guess === randomNumber) {
    numberOfAttempts = 10;
    document.getElementById("lastResult").innerHTML = numberOfAttempts;
    previousGuesses = [];
    document.getElementById("guesses").innerHTML = previousGuesses;
    alert("Game over");
  }
}
