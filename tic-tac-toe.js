
$(document).ready(function(){
	
	var counter = 0
	$(".box").click(function(){
		counter++
		if(counter % 2 == 0){
			$(this).text("X")
		}
		else {
			$(this).text("O")
		}

	})
	

})

