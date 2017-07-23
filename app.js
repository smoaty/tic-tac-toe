
$(document).ready(function(){
	$("#reset").hide()
	$("table").hide()
	$("#btn2").click(function(){
		play_two_players()
		$("#btn1").fadeOut()
		$("#btn2").fadeOut()
		$("#reset").fadeIn()
		$("table").fadeIn()
	})
	$("#reset").click(function(){
		location.reload()
	})
})
	
