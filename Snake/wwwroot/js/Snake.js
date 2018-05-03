function Snake() {

    this.worm = [];

    this.xspeed = 1;
    this.yspeed = 0;

    this.setup = function(x, y)
    {
        this.worm.push({ x: x, y: y });
    }
    this.draw = function () {
        fill(255);
        for (var i = 0; i < this.worm.length; i++) {
            var obj = this.worm[i];
            rect(obj.x, obj.y, scl, scl);
        }
    };

    this.update = function () {
        for (var i = this.worm.length - 1; i > 0 ; i--) {
            this.worm[i].x = this.worm[i - 1].x;
            this.worm[i].y = this.worm[i - 1].y;
        } 
        this.worm[0].x += this.xspeed * scl;
        this.worm[0].y += this.yspeed * scl;
    };

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    };

    this.eat = function (food) {

        pos = this.worm[0];
        if (dist(pos.x, pos.y, food.x, food.y) < 1) {
            this.worm.push({ x: this.worm[this.worm.length - 1].x, y: this.worm[this.worm.length - 1].y });

            return true;
        }
        return false;
    }

}