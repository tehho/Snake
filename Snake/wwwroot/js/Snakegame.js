
let scl = 10;
let s = new Snake();
let food = {};

function pickFoodLocation() {
    food.x = floor(random(0, width / scl)) * scl;
    food.y = floor(random(0, height / scl)) * scl;
}

function setup() {
    createCanvas(640, 480);
    frameRate(10);

    s.setup(floor(random(0, width / scl)) * scl, floor(random(0, height / scl)) * scl);

    pickFoodLocation();
}

function draw() {
    background(50);

    s.draw();
    s.update();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);

    if (s.eat(food)) {
        pickFoodLocation();
    }

}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    }
    else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    }
    else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
    else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }

    return false;
}

