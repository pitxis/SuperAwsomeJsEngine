 function GameState(ctx, parent) {
 	var humanPoints = 0;
 	var cpuPoints = 0;

 	this.setup = function(){
 		loadDrawbles();
 		
 	} 
	
}

GameState.prototype = new State();