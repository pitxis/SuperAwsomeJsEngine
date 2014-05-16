Card = function() {

	var selected = false;
	var attr_selected = -1;


	this.loadDrawbles = function()
	{
		this.drawblesArr["img"] = animal_pic();
		this.drawblesArr["altura"] = attr_dr("altura", 32); 
	}

	this.update = function(){

	}

	this.draw = function() {

	}


}

Card.prototype = new Entity(); 