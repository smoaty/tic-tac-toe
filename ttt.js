var tic_tac_toe = (function(){
	
	var module = {}


	module.Board = function(length){
		//Takes a length so that the board can be created with different sizes
		this.length = length

		this.getValues = function(length){
			//Takes a length and return a length x length array
			var values = []
			for (var x = 0; x < length; x++){
				//Create a new column for this row
				values[x] = []
				for (var y = 0; y < length; y++){
					values[x][y] = ""
					}
				}
			return values
			}

		this.values = this.getValues(this.length)

		this.getBoard = function(){
			return this.values
			}

		this.place = function(x_coord,y_coord,character){
			this.values[x_coord][y_coord] = character; //Ken's
			//TODO: Remove the ken comment when he's not looking
			}
		}


	module.Game = function(){
		this.board = new module.Board(3)
		this.turn_count = 0
		this.player_turn = "X"

		this.getBoard = function(){
			var board_instance = this.board
			var board_values = board_instance.getBoard()
			return board_values
			//Alternative to the above:
			//return this.board.getBoard()
			}

		this.setTurn = function(){
			//Increase the turn_count
			this.turn_count ++
			//Figure out the value for player_turn
			if (this.turn_count % 2 == 0){
				this.player_turn = "X"
				}
			else{
				this.player_turn = "O"
				}
			}

		this.place = function(x_coord,y_coord){
			//Take the current player
			var current_player = this.player_turn
			//Place that player's mark at the given coords
			this.board.place(x_coord,y_coord,current_player)
			//Increase turn
			this.setTurn()
			}

		this.printBoard = function(){
			var board_values = this.board.getBoard()
			for (var x = 0; x < 3; x++){
				console.log(board_values[x])
				}
			}

		this.checkSame = function(coord_list){
			var board_values = this.getBoard()
			var value = null
			for (var index = 0; index < coord_list.length; index++){
				var coords = coord_list[index]
				var x = coords[0]
				var y = coords[1]
				var coord_value = board_values[x][y]
				if (value == null){
					//Always set the value equal to the first coord_value that we see
					//Because we want to check to see if all of the other coord_values match this one
					value = coord_value
					continue
					}
				if (coord_value != value){
					return false
					}
				}
			return value
			}

		this.WINNING_COORDINATES = [
			[
				[0,0],
				[0,1],
				[0,2]
				],
			[
				[1,0],
				[1,1],
				[1,2]
				],
			[
				[2,0],
				[2,1],
				[2,2]
				],
			[
				[0,0],
				[1,0],
				[2,0]
				],
			[
				[0,1],
				[1,1],
				[2,1]
				],
			[
				[0,2],
				[1,2],
				[2,2]
				],
			[
				[0,0],
				[1,1],
				[2,2]
				],
			[
				[0,2],
				[1,1],
				[2,0]
				]
			]

		this.getWinner = function(){
			//Returns the mark of the winner if there is one
			for (var index = 0; index < this.WINNING_COORDINATES.length; index++){
				var coord_list = this.WINNING_COORDINATES[index]
				var winner = this.checkSame(coord_list)
				//Check to see if winner is not false
				if (winner != false){
					return winner
					}
				}
			return null
			}
			
		this.onePlayer = function(){
			var a1 = [0,0]
			var a2 = [0,1]
			var a3 = [0,2]
			var b1 = [1,0]
			var b2 = [1,1]
			var b3 = [1,2]
			var c1 = [2,0]
			var c2 = [2,1]
			var c3 = [2,2]
				if (a1 == "" && ((a3 == "X" && a2 == "X") || (c3 == "X" && b2 == "X") || (c1 == "X" && b1 == "X"))) {
					this.place(0,0)
					} 
				else if	(a2 == "" && ((a1 == "X" && a3 == "X") || (c2 == "X" && b2 == "X"))) {
					this.place(0,1)
					}
				else if (a3 == "" && ((a1 == "X" && a2 == "X") || (c1 == "X" && b2 == "X") || (c3 == "X" && b3 == "X"))) {
					this.place(0,2)
					}
				else if (c3 == "" && ((c1 == "X" && c2 == "X") || (a1 == "X" && b2 == "X") || (a3 == "X" && b3 == "X"))) {
					this.place(2,2)
					}
				else if (c1 == "" && ((c3 == "X" && c2 == "X") || (a3 == "X" && b2 == "X") || (a1 == "X" && b1 == "X"))) {
					this.place(2,0)
					}
				else if (c2 == "" && ((c3 == "X" && c1 == "X") || (a2 == "X" && b2 == "X"))) {
					this.place(2,1)
					}
				else if (b1 == "" && ((b3 == "X" && b2 == "X") || (a1 == "X" && c1 == "X"))) {
					this.place(1,0)
					}
				else if (b3 == "" && ((a3 == "X" && c3 == "X") || (b2 == "X" && b1 == "X"))) {
					this.place(1,2)
					}
				else if (b2 == "" && ((a3 == "X" && c1 == "X") || (c3 == "X" && a1 == "X") || (b3 == "X" && b1 == "X") || (c2 == "X" && a2 == "X"))) {
					this.place(1,1)
					}
					else{ // if none of the above are in place, this makes the ai make a move somewhere else.
						if (b2 == "") {
							this.place(1,1)
							}
						else if (a1 == "") {
							this.place(0,0)
							}
						else if (c3 == "") {
							this.place(2,2)
							} 
						else if (c2 == "") {
							this.place(2,1)
							}
						else if (b1 == "") {
							this.place(1,0)
							}
					}
			}
		}
						
					
					


	return module
	
	})()








