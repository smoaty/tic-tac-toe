
$(document).ready(function(){
	
	var counter = 0
	$(".box").click(function(){
	counter++
		if(counter % 2 == 0){
			$(this).text("X")
			check_for_winner()
			check_for_winner()
		}
		else {
			$(this).text("O")
			check_for_winner()
			
		}

	})
	
	function check_for_winner(){
	if($("#box-1").text() != ""){
		if($("#box-1").text() == $("#box-2").text()){ 
			if($("#box-2").text() == $("#box-3").text()){
				 $(document).ready(function(){
					alert($("#box-1").text() + " wins")
					})
			 }
		}
		else if($("#box-1").text() == $("#box-4").text()){
			if($("#box-4").text() == $("#box-7").text()){
				$(document).ready(function(){
					alert($("#box-1").text() + " wins")
					})
			}
		}
		else if($("#box-1").text() == $("#box-5").text()){
			if($("#box-5").text() == $("#box-9").text()){
				$(document).ready(function(){
					alert($("#box-1").text() + " wins")
					})
			}
				
		}
	}

	else if($("#box-2").text() != ""){
		if($("#box-2").text() == $("#box-5").text()){
            if($("#box-5").text() == $("#box-8").text()){
	        	$(document).ready(function(){
	        			console.log("win")
	    	        alert($("#box-2").text() + " wins")
                    })
            }
        }
	}
	
	else if($("#box-3").text() != ""){
        if($("#box-3").text() == $("#box-5").text()){
	        if($("#box-5").text() == $("#box-7").text()){
	        	$(document).ready(function(){
	        		alert($("#box-3").text() + " wins")
                    })
            }
        }
		else if($("#box-3").text() == $("#box-6").text()){
			if($("#box-6").text() == $("#box-9").text()){
				$(document).ready(function(){
					alert($("#box-3").text() + " wins")
					})	
			}
		}
	}
	else if($("#box-4").text == $("#box-5").text() && $("#box-4").text() == $("#box-6").text()){
		$(document).ready(function(){
			alert($("#box-4").text() + " wins")
			})
	}
	else if($("#box-7").text() != ""){
			if($("#box-7").text == $("#box-8").text()){
				if($("#box-7").text() == $("#box-9").text()){
		 			$(document).ready(function(){
		 			alert($("#box-7").text() + " wins")
		 		})
			}
		}
	}

}	
	

})

