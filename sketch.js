var trailX0 = 0;
var trailX1 = 0;
var trailY0 = 0;
var trailY1 = 0;

function setup() {
	createCanvas(800, 600);
	noFill();
	stroke(255, 0, 0);
}

function draw() {
	background(0);

	// mouse ellipse
	ellipse(mouseX, mouseY, 100, 100);

	// trail ellipse #0
	trailX0 = (mouseX + trailX0 * 9) / 10;
	trailY0 = (mouseY + trailY0 * 9) / 10;
	ellipse(trailX0, trailY0, 80, 80);

	// trail ellipse #1
	trailX1 = (trailX0 + trailX1 * 9) / 10;
	trailY1 = (trailY0 + trailY1 * 9) / 10;
	ellipse(trailX1, trailY1, 80, 80);

}