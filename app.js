var game_1 = new tic_tac_toe.Game()
$(function(){
		
	function compare(a,b) {
		if (a.id < b.id)
			return -1;
		if (a.id > b.id)
			return 1;
		  	return 0;
		}

			
	function createGameInstances(){
	$.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games.json",function(res){
		//Sort response by id
		res.sort(compare)
		//Go through sorted game list and make list of each game with button to play a game
			for(var i = 0; i < res.length; i++){ 
			var game = res[i]
			var id = game.id
			var player1 = game.player_1
			var player2 = game.player_2
			var playButton = "<button class='games' data-id="+id+">Play Current Game</button>"
			var games =	"<li><h3>Game"+ id +"</h3><div>Player 1:"+ player1 +"</div><div>Player 2:"+ player2 +"</div>"+playButton
			$(".container").append(games)
			}
	$(".games").click(function(){
		console.log("hello friend")
		var id = $(this).data("id")
		console.log(id)
		game_1.loadFromApi(id)
		$(".container").hide()
		$("#btn2").fadeIn()
	})
		})
	}
	createGameInstances()		
		
	//Gets the information stored from the API and runs through it to see if there are any saved moves, then puts those moves
	//into the UI
	function getSavedBoard(){
		var i = 1
		var savedMoves = game_1.apiBoard
		for(var moves = 0; moves < savedMoves.length; moves++){
			$("#box-"+i).text(savedMoves[moves])
			i++
			}
		}
	
	//Turns the html table into clickable buttons that are given x,y coordinates that corrispond to the tic-tac-toe game
	function makeButtons(){
		var i = 1	
		for(var x = 0; x <=2; x++){
			for(var y = 0; y <=2; y++){
				$("#box-"+i).data("x", x).data("y", y).one("click",function(){
					$(this).text(game_1.player_turn)						
					game_1.place($(this).data('x'), $(this).data('y'))
					game_1.convertArray()
					game_1.saveBoard()
					game_1.getWinner()
					if(game_1.winner == true){
						alert("We have a winner")
					}
				})
				i++
			}
		}
	}

	makeButtons()
	$("#reset").hide()
	$("table").hide()
	$("#player_1").hide()
	$("#make_player_1").hide()
	$("#player_2").hide()
	$("#make_player_2").hide()
	$("#btn1").hide()
	$("#btn2").hide()
	$("#btn2").click(function(){
		getSavedBoard()
		game_1.setTurn()
		$("#btn1").fadeOut()
		$("#btn2").fadeOut()
//		$("#player_1").fadeIn()
//		$("#make_player_1").fadeIn()
//		$("#player_2").fadeIn()
//		$("#make_player_2").fadeIn()
		$("#reset").fadeIn()
		$("table").fadeIn()
		if(game_1.winner == true){
				alert("We have a winner.")
		}
	})
	/* TODO Fix this stuff
	$("#btn1").click(function(){
		game_1.onePlayer()
		$("#btn1").fadeOut()
		$("#btn2").fadeOut()
		$("#reset").fadeIn()
		$("table").fadeIn()
	})

	
	$('#make_player_1').on('click', function(e) {
		var name1 = $("#player_1").val()
		$("#player1").text(name1)
		var obj = {tic_tac_toe_game:{player_1: $('#player_1').val() } };
		$.post('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/2.json', obj, function(res) {         
		$("#player_1").hide()
		$("#make_player_1").hide()
		});
	});

	$('#make_player_2').on('click', function(e) {
		var name2 = $("#player_2").val()
		$("#player2").text(name2)
		var obj = {tic_tac_toe_game:{player_2: $('#player_2').val() } };
		$.post('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/2.json', obj, function(res) {
		$("#player_2").hide()
		$("#make_player_2").hide()
		})
	})
*/
	$("#reset").click(function(){
		game_1.resetGame()
		location.reload()
	})
})
	
