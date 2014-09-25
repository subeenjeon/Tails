/*
var trailX0 = 0;
var trailX1 = 0;
var trailX2 = 0;
var trailX3 = 0;

var trailY0 = 0;
var trailY1 = 0;
var trailY2 = 0;
var trailY3 = 0;
*/

var trailX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var trailY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function setup() {
	createCanvas(800, 600);
	noFill();
	stroke(255, 0, 0);
}

function draw() {
	background(0);

	// mouse ellipse
	ellipse(mouseX, mouseY, 100, 100);
	trailX[0] = (mouseX + trailX[0] * 9) / 10;
	trailY[0] = (mouseY + trailY[0] * 9) / 10;

	for (var i = 1; i < 10; i = i +1) {
		trailX[i] = (trailX[i-1] + trailX[i] * 9) /10;
		trailY[i] = (trailY[i-1] + trailY[i] * 9) /10;
		ellipse(trailX[i], trailY[i], 80, 80);
	}
/*
	// trail ellipse #0
	trailX[0] = (mouseX + trailX[0] * 9) / 10;
	trailY[0] = (mouseY + trailY[0] * 9) / 10;
	ellipse(trailX[0], trailY[0], 80, 80);

	// trail ellipse #1
	trailX[1] = (trailX[0] + trailX[1] * 9) / 10;
	trailY[1] = (trailY[0] + trailY[1] * 9) / 10;
	ellipse(trailX[1], trailY[1], 80, 80);

	// trail ellipse #2
	trailX[2] = (trailX[1] + trailX[2] * 9) / 10;
	trailY[2] = (trailY[1] + trailY[2] * 9) / 10;
	ellipse(trailX[2], trailY[2], 80, 80);

	// trail ellipse #3
	trailX[3] = (trailX[2] + trailX[3] * 9) / 10;
	trailY[3] = (trailY[2] + trailY[3] * 9) / 10;
	ellipse(trailX[3], trailY[3], 80, 80);
	*/
}