function play_one_player(){

$(document).ready(function(){
var human = 'X'; // turn = 0
var computer = 'O'; // turn = 1
var compMove;
var turn = 0; // switches back and forth between 1 and 0 to change turns

var boardCheck; // checks the values of the boxes
var a1; // value within each cell, shortened to not have to type box-x each time
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; // checks for winner
var xWin = false; // true is x wins 
var oWin = false; // true if O wins 
var winAlert; // tells who won

var newGame;


// puts in an x or o depending on the turn, checks for a winner, and checks the board state for the computer to make a move. 
var newGame = function () {
    $('.box').one('click', function (e) {
        if (turn == 0) {
            $(this).text(human);
            boardCheck();
            checkWin();
            turn == 1;
            compMove();
            boardCheck();
            checkWin();
        }
    });
};


// Starts new game
$(document).ready(function () {
    newGame();
});

// The ai checks to see if there are any combination of two boxes with and X (which is the human) and places and O to block.
var compMove = function () {
    if (a1 == "" && ((a3 == "X" && a2 == "X") || (c3 == "X" && b2 == "X") || (c1 == "X" && b1 == "X"))) {
        $('#box-1').text("O");
        turn = 0;
    } 
	else if	(a2 == "" && ((a1 == "X" && a3 == "X") || (c2 == "X" && b2 == "X"))) {
        $('#box-2').text("O");
        turn = 0;
        }
    else if (a3 == "" && ((a1 == "X" && a2 == "X") || (c1 == "X" && b2 == "X") || (c3 == "X" && b3 == "X"))) {
        $('#box-3').text("O");
        turn = 0;
        }
    else if (c3 == "" && ((c1 == "X" && c2 == "X") || (a1 == "X" && b2 == "X") || (a3 == "X" && b3 == "X"))) {
	    $('#box-9').text("O");
        turn = 0;
        }
    else if (c1 == "" && ((c3 == "X" && c2 == "X") || (a3 == "X" && b2 == "X") || (a1 == "X" && b1 == "X"))) {
        $('#box-7').text("O");
        turn = 0;
        }
    else if (c2 == "" && ((c3 == "X" && c1 == "X") || (a2 == "X" && b2 == "X"))) {
        $('#box-8').text("O");
        turn = 0;
        }
    else if (b1 == "" && ((b3 == "X" && b2 == "X") || (a1 == "X" && c1 == "X"))) {
        $('#box-4').text("O");
        turn = 0;
        }
    else if (b3 == "" && ((a3 == "X" && c3 == "X") || (b2 == "X" && b1 == "X"))) {
        $('#box-6').text("O");
        turn = 0;
        }
    else if (b2 == "" && ((a3 == "X" && c1 == "X") || (c3 == "X" && a1 == "X") || (b3 == "X" && b1 == "X") || (c2 == "X" && a2 == "X"))) {
        $('#box-5').text("O");
        turn = 0;
        }
    	else{ // if none of the above are in place, this makes the ai make a move somewhere else.
        	if (b2 == "") {
            	$('#box-5').text("O");
                turn = 0;
                }
            else if (a1 == "") {
                $('#box-1').text("O");
                turn = 0;
                }
            else if (c3 == "") {
                $('#box-9').text("O");
                turn = 0;
                } 
            else if (c2 == "") {
                $('#box-8').text("O");
                turn = 0;
                }
            else if (b1 == "") {
                $('#box-4').text("O");
                turn = 0;
                }
        }
}
                                            
// this function is to avoid having to type box-x.html() every single time
boardCheck = function () {
    a1 = $('#box-1').html();
    a2 = $('#box-2').html();
    a3 = $('#box-3').html();
    b1 = $('#box-4').html();
    b2 = $('#box-5').html();
    b3 = $('#box-6').html();
    c1 = $('#box-7').html();
    c2 = $('#box-8').html();
    c3 = $('#box-9').html();
};

// checks for wins or a tie
checkWin = function () { 
    if ((a1 == a2 && a1 == a3 && (a1 == "X")) || //first row
    (b1 == b2 && b1 == b3 && (b1 == "X")) || //second row
    (c1 == c2 && c1 == c3 && (c1 == "X")) || //third row
    (a1 == b1 && a1 == c1 && (a1 == "X")) || //first column
    (a2 == b2 && a2 == c2 && (a2 == "X")) || //second column
    (a3 == b3 && a3 == c3 && (a3 == "X")) || //third column
    (a1 == b2 && a1 == c3 && (a1 == "X")) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "X"))) //diagonal 2
     {
        xWin = true;
        winAlert();

    } 
    else if ((a1 == a2 && a1 == a3 && (a1 == "O")) || 
        (b1 == b2 && b1 == b3 && (b1 == "O")) || 
        (c1 == c2 && c1 == c3 && (c1 == "O")) || 
        (a1 == b1 && a1 == c1 && (a1 == "O")) || 
        (a2 == b2 && a2 == c2 && (a2 == "O")) || 
        (a3 == b3 && a3 == c3 && (a3 == "O")) || 
        (a1 == b2 && a1 == c3 && (a1 == "O")) || 
        (a3 == b2 && a3 == c1 && (a3 == "O"))) 
         {
            oWin = true;
            winAlert();

        } 
    else if (((a1 == "X") || (a1 == "O")) && 
    		((b1 == "X") || (b1 == "O")) && 
    		((c1 == "X") || (c1 == "O")) && 
    		((a2 == "X") || (a2 == "O")) && 
    		((b2 == "X") || (b2 == "O")) && 
    		((c2 == "X") || (c2 == "O")) && 
    		((a3 == "X") || (a3 == "O")) && 
    		((b3 == "X") || (b3 == "O")) && 
    		((c3 == "X") || (c3 == "O"))) {
         alert("It's a tie...this shouldn't be surprising!");
            }
        }
    




var winAlert = function () {
    if (xWin == true) {
        alert("You win...that is incredible!");
        
    } 
    else if (oWin == true) {
            alert("You lose lol.");
        
        }
    }
})
}


