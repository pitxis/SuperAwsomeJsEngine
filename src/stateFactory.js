 StateFactory = function(ctx) {

 	var states = {}; 	
 	var anim = animloop;
 	return {
		newState: function(name, state) {
			states[name] = state;
			state.init(name, ctx, function() { this.endState(name, parent); } );
		
		},

		startState: function(name) {
			//states[name].run();
			return states[name];
		},

		endState: function() {

		},

		nextState : function(obj) {
		},

		getState : function(name) {
			return states[name];
		}


 	}
	
}
