console.log('TIC TAC TOE');


//                    ****  THE BOARD  ****

var board = [ ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' '];
//console.log(board);
//var board1 = [ '0', '1', '2', '3', '4', '5','6', '7', '8'];
//var boardLetters = [ 'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i'];
// console.log(boardLetters);
// console.log(boardLetters[0]);



//                    ****   WINNING COMBO   ****

var winsRows1 = [board[0], board[1], board[2]];
var winsRows2 = [board[3], board[4], board[5]];
var winsRows3 = [board[6], board[7], board[8]];
//var winsRows = [[board[0], board[1], board[2]], [board[3], board[4], board[5]], [board[6], board[7], board[8]]];
// console.log(winsRows1); console.log(winsRows2); console.log(winsRows3);
//console.log(winsRows);

var winsColumns1 = [board[0], board[3], board[6]];
var winsColumns2 = [board[1], board[4], board[7]];
var winsColumns3 = [board[2], board[5], board[8]];
//var winsColumns = [[board[0], board[3], board[6]], [board[1], board[4], board[7]], [board[2], board[5], board[8]]];
// console.log(winsColumns1); console.log(winsColumns2); console.log(winsColumns3);
//console.log(winsColumns);

var winsDiagonaL = [board[0], board[4], board[8]];
var winsDiagonaR = [board[2], board[4], board[6]];
//var winsDiagona = [[board[0], board[4], board[8]], [board[2], board[4], board[6]]];
//console.log(winsDiagonaL); console.log(winsDiagonaR);
//console.log(winsDiagona)

//var winningCombo = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];




//                    ****  WHO IS THE WINNER ****

player1 = 'x';
player2 = 'o';


var getWinner = function(playerA,playerB) {

  if ('x' === board[0] && 'x' === board[1] && 'x' === board[2]) {
    //console.log('X won')
    return true;
  } else if ('x' === board[3] && 'x' === board[4] && 'x' === board[5]) {
    return true;
  } else if ('x' === board[6] && 'x' === board[7] && 'x' === board[8]) {   // ^ winning rows
    return true;
  } else if ('x' === board[0] && 'x' === board[3] && 'x' === board[6]) {
    return true;
  } else if ('x' === board[1] && 'x' === board[4] && 'x' === board[7]) {
    return true;
  } else if ('x' === board[2] && 'x' === board[5] && 'x' === board[8]) {    // ^ winning columns
    return true;
  } else if ('x' === board[0] && 'x' === board[4] && 'x' === board[8]) {
    return true;
  } else if ('x' === board[2] && 'x' === board[4] && 'x' === board[6]) {    // ^ winning diagonal
    return true;
  } else if ('y' === board[0] && 'y' === board[1] && 'y' === board[2]) {
    //console.log('Y won')
    return true;
  } else if ('y' === board[3] && 'y' === board[4] && 'y' === board[5]) {
    return true;
  } else if ('y' === board[6] && 'y' === board[7] && 'y' === board[8]) {   // ^ winning rows
    return true;
  } else if ('y' === board[0] && 'y' === board[3] && 'y' === board[6]) {
    return true;
  } else if ('y' === board[1] && 'y' === board[4] && 'y' === board[7]) {
    return true;
  } else if ('y' === board[2] && 'y' === board[5] && 'y' === board[8]) {    // ^ winning columns
    return true;
  } else if ('y' === board[0] && 'y' === board[4] && 'y' === board[8]) {
    return true;
  } else if ('y' === board[2] && 'y' === board[4] && 'y' === board[6]) {    // ^ winning diagonal
    return true;
  } else {
    return false;
  }

};

console.log(getWinner(player1,player2));





//                    ****  LETS PLAY ! :) ****

// var scoreX = 0;       // ?? later on ??
// var scoreO = 0;
// var counter = 0;
// var rounds = 0;



var player1 = 'x';
var player2 = 'o';

var indexPlayer1 = 1;           // player 1 each choice  -> connect with dom - html div for each square
var indexPlayer2 = 4;           // player 2 each choice  -> connect with dom - html div for each square

//var arrayPlayer1 = [];          //store player1 choices
//var arrayPlayer2 = [];          //store player2 choices


// arrayPlayer1.push(indexPlayer1);
// console.log(arrayPlayer1);



var chosePosition = function (index,player) {

  var arrayPlayer = [];                                        //store players choices

    for (var round= 0; round < board.length; round++) {
      board[index] = player;                                   //set my board position
        if (board[index] === 'x') {
          arrayPlayer.push(index);
          console.log(arrayPlayer);                             //push the choice to the  arrayPlayer
        } else if (board[index] === 'o') {
          arrayPlayer.push(index);
          console.log(arrayPlayer);
        }
    }
}

chosePosition(indexPlayer1, player1);
chosePosition(indexPlayer2, player2);

console.log(board);
