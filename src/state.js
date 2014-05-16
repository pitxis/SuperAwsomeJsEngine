 State = function() {


	return {

		init : function (name, ctx, callb) {
			this.name = name;
			this.ctx = ctx;
			this.stopCallback = callb;
			this.entities = {};
			this.setup();
		},

		loadEntities : function () {},
		
		setup : function () {
			console.log("hola");
		},
		
		run : function() {
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