console.log('TIC TAC TOE');


//                    ****  THE BOARD  ****

var board = [ '', '', '', '', '', '','', '', '' ];
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
  } else if ('o' === board[0] && 'o' === board[1] && 'o' === board[2]) {
    //console.log('Y won')
    return true;
  } else if ('o' === board[3] && 'o' === board[4] && 'o' === board[5]) {
    return true;
  } else if ('o' === board[6] && 'o' === board[7] && 'o' === board[8]) {   // ^ winning rows
    return true;
  } else if ('o' === board[0] && 'o' === board[3] && 'o' === board[6]) {
    return true;
  } else if ('o' === board[1] && 'o' === board[4] && 'o' === board[7]) {
    return true;
  } else if ('o' === board[2] && 'o' === board[5] && 'o' === board[8]) {    // ^ winning columns
    return true;
  } else if ('o' === board[0] && 'o' === board[4] && 'o' === board[8]) {
    return true;
  } else if ('o' === board[2] && 'o' === board[4] && 'o' === board[6]) {    // ^ winning diagonal
    return true;
  } else {
    return false;
  }

};

                                                                //console.log(getWinner(player1,player2));



//                    ****  DOM / html ****

// var dogX = document.getElementById('dogX');
// var catO = document.getElementById('catO');





//                    ****  LETS PLAY ! :) ****

var whoseTurn = 'x';                                // first turn goes to x!

var player1 = 'x';
var player2 = 'o';

// var rounds = 0;


$('.boxes').on('click', buttonClicked);


function buttonClicked(event) {                     // when one of my boxes is clicked, this gonna happen:

                                                                //console.log(event.target.id);
                                                                //board[event.target.id] = 'o'; // >>> !!! variable
  if (!board[event.target.id]) {            // if my board index is empty - player can choose where to put his turn

    var index = event.target.id;
    var turn = 0;
                                                                //console.log(typeof(index));
                                                                //console.log('whose turn', whoseTurn);
    if(whoseTurn === 'x') {
                                                                //console.log('x turn');
      board[index] = 'x';
                                                                            //indexPlayer1.push(index);
      whoseTurn = 'o';
      turn += 1;                                      // which turn it is :)
                                                                //console.log('x is at: ' + index);
                                                                //console.log('the turn is: ' + turn);
      $(event.target).attr( 'id', 'x_dog' );


    } else {
                                                              //console.log('y turn');
                                                              //board[event.target.id]
      board[index] = 'o';
      whoseTurn = 'x';
      turn += 2;
                                                              //console.log(turn);
      $(event.target).attr( 'id', 'o_cat' );

                                                                  //board.indexPlayer2.push(index);

                                                              //console.log('o is at: ' + index);
    }

  } else {
    console.log('that squre is full');
  }


  var scoreX = 0;
  var scoreO = 0;

  if ((getWinner() === true) && turn % 2 === 1) {      // determining if someone has won !
    console.log('x wooooooon!');
    scoreX++;
    console.log('The "x" score is: ' + scoreX);
                  //$(event.target).attr( 'id', '0' );    >>>>>>> reset when new game
      $('#gameArea').hide();
      $('#winScreen').addClass('dogX');

    board = [ '', '', '', '', '', '','', '', '' ];



  } else if ((getWinner() === true) && turn % 2  === 0) {
    console.log('o wooooooon!');
    scoreO++;
                //$(event.target).attr( 'id', '0' );    >>>>>>> reset when new game
      $('#gameArea').hide();
      $('#winScreen').addClass('catO');

    board = [ '', '', '', '', '', '','', '', '' ];
    console.log('The "o" score is: ' + scoreO);

  } else if(turn === 9){
    console.log('its a tie')
    board = [ '', '', '', '', '', '','', '', '' ];
  }


  console.log(board);

}




//                    ****  LETS PLAY - beginnings ****



//var indexPlayer1 = 1;           // player 1 each choice  -> connect with dom - html div for each square
//var indexPlayer2 = 4;           // player 2 each choice  -> connect with dom - html div for each square

//var arrayPlayer1 = [];          //store player1 choices
//var arrayPlayer2 = [];          //store player2 choices


// var choosePosition = function (index,player) {
//
//   var arrayPlayer = [];                                        //store players choices
//
//     for (var round = 0; round < board.length; round++) {
//       board[index] = player;                                   //set my board position
//         if (board[index] === 'x') {
//           arrayPlayer.push(index);
//           console.log(arrayPlayer);
//           console.log('x is at: ' + index);                             //push the choice to the  arrayPlayer
//         } else if (board[index] === 'o') {
//           arrayPlayer.push(index);
//           console.log(arrayPlayer);
//           console.log('y is at: ' + index);
//         }
//     }
// }

// choosePosition(indexPlayer1, player1);
// choosePosition(indexPlayer2, player2);
