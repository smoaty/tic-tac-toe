function play_two_players(){
$(document).ready(function(){
	//this counts each click and changes from x to o for each click. It also checks to see if it is a tie or if there is a winner.
	var counter = 0
	$(".box").one("click",function(){
	counter++
		if(counter == 9){
			alert("The game is a draw. Play again!")
		
		}
		else if(counter % 2 == 0){
			$(this).text("X")
			check_for_winner()
			check_for_winner()
		}
		else {
			$(this).text("O")
			check_for_winner()	
		}
	})
	//This function goes through each of the possible win conditions.
function check_for_winner(){
	if($("#box-1").text() != "" && $("#box-1").text() == $("#box-2").text() && $("#box-1").text() == $("#box-3").text()){
		$(document).ready(function(){
		alert($("#box-1").text() + " wins")
		})
	}
	else if($("#box-1").text() != "" && $("#box-1").text() == $("#box-4").text() && $("#box-1").text() == $("#box-7").text()){
		$(document).ready(function(){
		alert($("#box-1").text() + " wins")
		})
	}
	else if($("#box-1").text() != "" && $("#box-1").text() == $("#box-5").text() && $("#box-1").text() == $("#box-9").text()){
		$(document).ready(function(){
		alert($("#box-1").text() + " wins")
		})
	}
	else if($("#box-2").text() != "" && $("#box-2").text() == $("#box-5").text() && $("#box-2").text() == $("#box-8").text()){
		$(document).ready(function(){
		alert($("#box-2").text() + " wins")
		})
	}
	else if($("#box-3").text() != "" && $("#box-3").text() == $("#box-5").text() && $("#box-3").text() == $("#box-7").text()){
		$(document).ready(function(){
		alert($("#box-3").text() + " wins")
		})
	}
	else if($("#box-3").text() != "" && $("#box-3").text() == $("#box-6").text() && $("#box-3").text() == $("#box-9").text()){
		$(document).ready(function(){
		alert($("#box-3").text() + " wins")
		})
	}	
	else if($("#box-4").text() != "" && $("#box-4").text() == $("#box-5").text() && $("#box-4").text() == $("#box-6").text()){
		$(document).ready(function(){
		alert($("#box-4").text() + " wins")
		})
	}
	else if($("#box-7").text() != "" && $("#box-7").text() == $("#box-8").text() && $("#box-7").text() == $("#box-9").text()){
		$(document).ready(function(){
		alert($("#box-7").text() + " wins")
		})
	}
}

})
}


