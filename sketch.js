var trailX = 0;
var trailY = 0;

function setup() {
	createCanvas(800, 600);
	noFill();
	stroke(255, 0, 0);
}

function draw() {
	background(0);
	ellipse(mouseX, mouseY, 100, 100);
	trailX = (mouseX + trailX * 9) / 10;
	trailX = (mouseY + trailY * 9) / 10;
	ellipse(trailX, trailY, 80, 80);
}