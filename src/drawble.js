Drawable = function() {
    
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.spriteArr = [];
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
 
    this.init = function(x, y, w, h) {
        // Default variables
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
 
    
    this.draw = function(ctx) {
        ctx.drawImage(sprite, this.x, this.y);
    };

    this.update = function() {
    };
}