 State = function() {

	var components = [];
	var name;

	return {

		init : function (name, ctx, callb) {
			this.name = name;
			this.ctx = ctx;
			this.stopCallback = callb;
			this.setup();
		},
		
		setup : function () {
			console.log("hola");
		},
		
		run : function(animloop) {
			animloop();
		},

		update : function() {
		},

		redraw : function(){
		},

		stop : function(name){
			this.stopCallback(name);
		}

	}
	

    
}