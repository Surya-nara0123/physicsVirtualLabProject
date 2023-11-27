function setup() {
  createCanvas(400, 300);
}

let img, img1;
let state = "key in";
let state3 = "unlocked";

function preload() {
  img1 = loadImage('circuit.jpeg');
  img = loadImage('circuit1.png');
}
function draw() {
  // displaying the circuit images for switched off and on modes and creating the jockey mechanism
  if (state == "key in") {
    image(img1, 370, 100);
    circle(width / 2 + 100, 440, 100);
    stroke(255, 0, 0);
    line(width / 2 + 100, 440, width / 2 + 100, 390);
    stroke(0);
    if (state3 == "unlocked") {
      x = constrain(mouseX, 435, 1098);
    }
    line(width / 2 + 10, 410, x, 515);
    circle(x, 515, 10);
  } else {
    image(img, 370, 100);
    stroke(0);
    line(width / 2 + 10, 410, (1098 + 435) / 2, 515);
    circle((1098 + 435) / 2, 515, 10);
  }
}