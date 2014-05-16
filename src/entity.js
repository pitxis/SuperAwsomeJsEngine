Entity = function() 
{
	this.drawblesArr = [];
	this.x_pos;
	this.y_pos;

	return {
		init: function(x, y){
			this.x_pos = x;
			this.y_pos = y;
		},
		update: function() {},
		draw: function() {}
	}
}	