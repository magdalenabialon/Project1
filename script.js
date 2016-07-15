console.log('TIC TAC TOE');


//                    ****  THE BOARD  ****

var board = [ '', '', '', '', '', '','', '', '' ];
//console.log(board);



//                    ****  STARTING BANNER  ****

var gameScreen = function() {                         // hide banner when skip/submitted
  $('.initialBannerBox').css('display', 'none');
};


var startGame = function() {

  if ($('#player1name').val() !== "" &&  $('#player2name').val() !== "") {
    var player1name = $('#player1name').val();
    $('#p1name').html(player1name);
    var player2name = $('#player2name').val();
    $('#p2name').html(player2name);
  } else {
    $('.nameInput').css({'background-color': 'rgba(255,215,0,0.8)'});
    $('.nameInput').addClass('animated flip');
    return;
  }

  gameScreen();
};

$('#subm').on('click', startGame);
$('#skip').on('click', gameScreen);




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
var numberOfTurns = 0;



$('.boxes').on('click', buttonClicked);


function buttonClicked(event) {


  if (!board[event.target.id]) {                     // if my board index is empty - player can choose where to put his turn

    var index = event.target.id;

    if(whoseTurn === 'x') {
      board[index] = 'x';
      whoseTurn = 'o';
      numberOfTurns++;
      $(event.target).addClass('x_dog');
    } else if (whoseTurn === 'o') {
      board[index] = 'o';
      whoseTurn = 'x';
      numberOfTurns++;
      $(event.target).addClass('o_cat');
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
      console.log('The "x" score is: ' + scoreX);
      startNextGame();
      $('#gameArea').hide();
      $('#winScreen').show();
      $('#winScreen').removeClass('catO');
      $('#winScreen').removeClass('catOx3wins');
      $('#winScreen').removeClass('dogXx3wins');
      $('#winScreen').addClass('dogX');

      if (scoreX >= 3) {
        $('#winScreen').addClass('dogXx3wins');
      }


    } else if ((getWinner() === true) && (whoseTurn === 'x')) {
      console.log('o wooooooon!');
      scoreO++;
      scrO.innerText = scoreO;
      console.log('The "o" score is: ' + scoreO);
      startNextGame();
      $('#gameArea').hide();
      $('#winScreen').show();
      $('#winScreen').removeClass('dogX');
      $('#winScreen').removeClass('dogXx3wins');
      $('#winScreen').removeClass('catOx3wins');
      $('#winScreen').addClass('catO');

      if (scoreO >= 3) {
        $('#winScreen').removeClass('dogXx3wins');
        $('#winScreen').addClass('catOx3wins');
      }


    } else if (numberOfTurns === 9) {
      console.log('its a tie');
      startNextGame();
      $('#gameArea').hide();
      $('#winScreen').show();
      $('#winScreen').removeClass('dogX');
      $('#winScreen').removeClass('catO');
      $('#winScreen').removeClass('dogXx3wins');
      $('#winScreen').removeClass('catOx3wins');
      $('#winScreen').addClass('itsTie');
    }

  console.log(board);

}



var newGame = function() {
  board = [ '', '', '', '', '', '','', '', '' ];
  whoseTurn = 'x';
  numberOfTurns = 0;
  $('#winScreen').hide();
  $('#gameArea').show();
  $('.boxes').removeClass('o_cat');
  $('.boxes').removeClass('x_dog');
  $('.boxes').removeClass('itsTie');
}


var startNextGame = function(){
  setTimeout(newGame, 2000);
}
