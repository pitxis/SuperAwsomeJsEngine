 StateFactory = function(animloop, ctx) {

 	var states = {}; 	

 	return {
		newState: function(name, state) {
			states[name] = state;
			state.init(name, ctx, function() { this.endState(name, parent); } );
		
		},

		startState: function(name) {
			states[name].run(animloop);
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
