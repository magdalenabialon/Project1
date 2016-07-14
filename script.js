console.log('TIC TAC TOE');


//                    ****  THE BOARD  ****

var board = [ '', '', '', '', '', '','', '', '' ];
//console.log(board);




//                    ****  WHO IS THE WINNER ****

player1 = 'x';
player2 = 'o';

var scoreX = 0;
var scoreO = 0;


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




//                    ****  LETS PLAY ! :) ****

var whoseTurn = 'x';                                // first turn goes to x!

var player1 = 'x';
var player2 = 'o';

var numberOfTurns = 0;


$('.boxes').on('click', buttonClicked);


function buttonClicked(event) {
console.log(!board[event.target.id]);

  if (!board[event.target.id]) {                    // if my board index is empty - player can choose where to put his turn


    var index = event.target.id;


    if(whoseTurn === 'x') {
      board[index] = 'x';
      whoseTurn = 'o';
      numberOfTurns++;
      $(event.target).addClass( 'x_dog' );


    } else if (whoseTurn === 'o') {
      board[index] = 'o';
      whoseTurn = 'x';
      numberOfTurns++;
      $(event.target).addClass( 'o_cat' );
    }


  } else {
    console.log('that squre is full');

  }



    var scrX = document.getElementById('scoreX');
    var scrO = document.getElementById('scoreY');


    if ((getWinner() === true) && (whoseTurn === 'o')) {
      console.log('x wooooooon!');
      scoreX++;
      scrX.innerText = scoreX;
      startNextGame();
      console.log('The "x" score is: ' + scoreX);
        $('#gameArea').hide();
        $('#winScreen').removeClass('catO');
        $('#winScreen').addClass('dogX');
        $('#winScreen').show();


    } else if ((getWinner() === true) && (whoseTurn === 'x')) {
      console.log('o wooooooon!');
      scoreO++;
      scrO.innerText = scoreO;
      startNextGame();
      console.log('The "o" score is: ' + scoreO);
        $('#winScreen').removeClass('dogX');
        $('#winScreen').addClass('catO');
        $('#gameArea').hide();
        $('#winScreen').show();


    } else if (numberOfTurns === 9) {
      console.log('its a tie');
        $('#gameArea').hide();
        $('#winScreen').removeClass('dogX');
        $('#winScreen').removeClass('catO');
        $('#winScreen').addClass('itsTie');
        $('#winScreen').show();
        startNextGame();
    }


  console.log(board);

}




var newGame = function() {
  board = [ '', '', '', '', '', '','', '', '' ];
  whoseTurn = 'x';
  numberOfTurns = 0;

  $('#winScreen').hide();
  $('#gameArea').show();
  $('.boxes').removeClass( 'o_cat' );
  $('.boxes').removeClass( 'x_dog' );
  $('.boxes').removeClass( 'itsTie' );
  // $('.boxes').addClass( '.boxes' );

  if (scoreO >= 3) {
    $('#winScreen').addClass('catOx3wins');
  }
  else if (scoreX >= 3) {
    $('#winScreen').addClass('catOx3wins');
  }

}


var startNextGame = function(){
  setTimeout(newGame, 1000);
}
