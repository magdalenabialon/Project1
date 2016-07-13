console.log('TIC TAC TOE');


//                    ****  THE BOARD  ****

var board = [ ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' '];
//console.log(board);




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




//                    ****  DOM board  ****

$('.boxes').on('click', buttonClicked);

function buttonClicked(event) {
  console.log($('.boxes')[1]);
  console.log(event.target.id);
  board[event.target.id] = "x"
  console.log(board);
}





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




var choosePosition = function (index,player) {

  var arrayPlayer = [];                                        //store players choices

    for (var round = 0; round < board.length; round++) {
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

choosePosition(indexPlayer1, player1);
choosePosition(indexPlayer2, player2);

console.log(board);
