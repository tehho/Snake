
var dots = [{ id: 1, x: 0, y: 0, isPrime: true }];

$("#submit").click(function () {
    getNextPrime(dots[dots.length - 1]);
});



let scl = 20;
let size = 5;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    var centerx = (width / 2) + parseInt($("#centerx").val());
    var centery = (height / 2) + parseInt($("#centery").val());

    background(50);

    fill(255);
    ellipse(centerx, centery, 10, 10);

    var scl = parseInt($("#scl").val());

    for (var i = 0; i < dots.length; i++) {
        if (dots[i].isPrime)
            fill(255, 0, 0);
        else
            fill(255);
        ellipse((floor(dots[i].x * scl) + centerx), (floor(dots[i].y * scl) + centery) , size, size);
    }
}
function getNextPrime(prime) {

    var id = prime.id;
    var x = prime.x;
    var y = prime.y;
    var isPrime = prime.isPrime;

    $.get({
        data: {
            id,
            x,
            y,
            isPrime
        },
        url: "api/prime/getPrime",
        success: function (result) {
            if (result.length === 0) {
                alert("sum thin wong");
            }
            else {
                for (var i = 0; i < result.length; i++) {
                    dots.push(result[i]);
                }
            }
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(xhr.responseText);
            console.log(status);
            console.log(error);
        }
    });
}