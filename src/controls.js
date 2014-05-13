var SajsControls = function(canvas) {
	
	 KEY_CODES = {
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a_key',
        83: 's_key',
        68: 'd_key',
        87: 'w_key'
    };

    KEY_STATUS = {};
    MOUSE_POS = {x: 0, y:0};

    document.onkeydown = function(e) {
	    var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
	    if (KEY_CODES[keyCode]) {
			e.preventDefault();
			KEY_STATUS[KEY_CODES[keyCode]] = true;
	        console.log("key down ="+KEY_CODES[keyCode]);
	    }
    }

    document.onkeyup = function(e) {
      	var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
      	if (KEY_CODES[keyCode]) {
        	e.preventDefault();
        	KEY_STATUS[KEY_CODES[keyCode]] = false;
        	console.log("key up ="+KEY_CODES[keyCode]);
      	}
    }
    
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();

        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousemove', function(evt) {
        MOUSE_POS =  getMousePos(canvas, evt);
    }, false);

    
}