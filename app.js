$(document).ready(function(){
$("#reset").hide()
})

$(document).ready(function(){
	$("#btn2").click(function(){
		play_two_players()
		$("#btn1").fadeOut()
		$("#btn2").fadeOut()
		$("#reset").fadeIn()
	})
})
	
