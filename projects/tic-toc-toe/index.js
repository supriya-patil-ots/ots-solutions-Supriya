//main game logic
const inputBox = document.getElementsByClassName("box");
const tuenChanger = document.getElementById("gameInfo");
const reset_btn = document.getElementById("resetBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let turn = "x";
let isGameActive = true;

const player_x_won = "PLAYER_Y_WON";
const player_y_won = "PLAYER_X_WON";
const tie = "TIE";
//function for change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//function to check win
const checkWin = () => {};
