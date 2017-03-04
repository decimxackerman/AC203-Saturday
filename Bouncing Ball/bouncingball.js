//declining and initializing variables
var canvas;
var ctx;
var x = 300; //setting the original position of the ball
var y = 150;
var r1 = 25;
var r2 = 50;
var width = 600;
var height = 300;
//small changes in x and y direction at each frame
var mx = 2;
var my = 2;
//second ball
var mx1 = 5;
var my1 = 5;
var x1 = 200;
var y1 = 200;
color1 = "cyan";
color2 = "salmon";

function init(){
	canvas = document.getElementById("canvas1");
	ctx = canvas.getContext("2d");
	return setInterval(drawBall,10);
}

function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle=color;
	ctx.fill();

}

function clear(){
	ctx.clearRect(0,0,600,300);
}

function drawBall(){
	clear();
	circle(x,y,25,color1);
	circle(x1,y1,50,color2);

	//to make the ball bounce at the edges of canvas
	if(x1 + r2 > width || x1 - r2 < 0){
		mx1=-mx1;
	}
	if (y1 + r2 > height || y1 - r2 < 0) {
		my1=-my1;
	}
	if(x + r1 > width || x - r1 < 0){
		mx=-mx;
	}
	if (y + r1 > height || y - r1 < 0) {
		my=-my;
	}
	//move x and y of the ball every frame (10ms)
	x+=mx;
	y+=my;
	x1+=mx1;
	y1+=my1;

}

init();
