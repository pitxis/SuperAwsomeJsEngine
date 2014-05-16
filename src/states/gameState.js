 function GameState(parent) {
 	var humanPoints = 0;
 	var cpuPoints = 0;

 	this.loadEntities = function(){
 		for(entity in this.entities) {
 			this.entities[entity].init();
 		}
 	}

 	this.setup = function(){
 		this.loadEntities();
 		this.entities["player"] = new Player();
 		this.entities["cpu"] = new CPU();
 	}

 	this.update = function(ctx){
		for(entity in this.entities) {
 			this.entities[entity].update();
 		} 
 	}

	
	this.redraw = function(ctx){
		for(entity in this.entities) {
 			this.entities[entity].draw();
 		} 		
 	} 	
	
}

GameState.prototype = new State();