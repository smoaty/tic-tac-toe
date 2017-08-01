var game_1 = new tic_tac_toe.Game()
$(document).ready(function(){


	function makeButtons(){
		var i = 1	
		for(var x = 0; x <=2; x++){
				var curr_x = x
			for(var y = 0; y <=2; y++){
					var curr_y = y
				$("#box-"+i).data("x", x).data("y", y).one("click",function(){
					$(this).text(game_1.player_turn)						
					game_1.place($(this).data('x'), $(this).data('y'))
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
	$("#btn2").click(function(){
		
		$("#btn1").fadeOut()
		$("#btn2").fadeOut()
		$("#reset").fadeIn()
		$("table").fadeIn()
		if(game_1.winner == true){
				alert("We have a winner.")
		}

	})
	$("#btn1").click(function(){
		game_1.onePlayer()
		$("#btn1").fadeOut()
		$("#btn2").fadeOut()
		$("#reset").fadeIn()
		$("table").fadeIn()

	})
	$("#reset").click(function(){
		location.reload()
	})
})
	
