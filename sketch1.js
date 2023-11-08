function setup() {
    createCanvas(1520, 600);
}

let img;
function preload() {
    img = loadImage('galvanometer.png');
}

function draw() {
    background(20);
    image(img, 400, 0);
}