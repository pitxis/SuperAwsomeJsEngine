SuperAwesomeJs = function(canvas) {
	var canvas =  document.getElementById(canvas),
    ctx = canvas.getContext("2d");


    SajsControls(canvas);

        // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    animloop = function(){
        requestAnimFrame(animloop);
        curr_state.update(ctx);
        curr_state.redraw();
    }


    //lState = new LoadState();

    //gState = new GameState();
    //gState.init("Game", ctx, );
    sFactory = StateFactory(animloop, ctx);
    sFactory.newState("Game", new GameState("main"));
    //StateFactory.newState("Second", new GameState());

    curr_state = sFactory.startState("Game");

    animloop();


    
}