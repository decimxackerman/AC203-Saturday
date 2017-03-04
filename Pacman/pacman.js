
//declare and initialize variables
var canvas;
var ctx;
//original position of the ball
var x = 420;
var y = 420;
var r = 20;
//make the ball stay stationary in the beginning of the game
var mx = 0;
var my = 0;
var width = 500;
var height = 500;
//positions of the good and bad guy
var goodX;
var goodY;
var badX;
var badY;
var spriteHeight = 50;
var spriteWidth = 50;

var goodCollision = false;
var badCollision = false;
var score = 0;

function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	//assign random coordinates for good and bad guy
	goodX = Math.floor(Math.random()*451);
	goodY = Math.floor(Math.random()*451);
	badX = Math.floor(Math.random()*451);
	badY = Math.floor(Math.random()*451);

	window.onkeydown = keydownControl;
	return setInterval(draw,10);
}

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle="cyan";
	ctx.fill();

}

function clear(){
	ctx.clearRect(0,0,500,500);
}
function drawBadGuy(badX,badY){
 	ctx = document.getElementById("myCanvas").getContext("2d");
 	var bad = new Image();
 	bad.src = "uglyflower.png"
 	ctx.drawImage(bad,badX,badY,50,50);
 }
function drawGoodGuy(goodX,goodY){
 	ctx = document.getElementById("myCanvas").getContext("2d");
 	var good = new Image();
 	good.src = "mushroom.png"
 	ctx.drawImage(good,goodX,goodY,50,50);
 }

 //check if the ball is colliding with the good or bad guy
function collisionCheck(){
  	if ((x>=badX) && (x<=badX+spriteWidth) && (y>=badY) && (y<=badY+spriteWidth)) {
  		badCollision = true;
  	}
  	else{
  		badCollision = false;
  	}
  	if((x>=goodX) && (x<=goodX+spriteWidth) && (y>=goodY) && (y<=goodY+spriteWidth)) {
  		goodCollision = true;
  	}
  	else{
  		goodCollision = false;
  	}
  }

 //change locations and score when collisions are true
function collisionHandle(){
	if (badCollision == true){
		badX = Math.floor(Math.random()*451);
		badY = Math.floor(Math.random()*451);
		score-=1;
		document.getElementById("scoreSystem").innerHTML="SCORE: "+score;
	}
	if (goodCollision == true){
		goodX = Math.floor(Math.random()*451);
		goodY = Math.floor(Math.random()*451);
		score-=1;
		document.getElementById("scoreSystem").innerHTML="SCORE: "+score;
	}
}

 // draw function to create a frame
function draw(){
	clear();
	circle(x,y,r);
	drawBadGuy(badX,badY);
	drawGoodGuy(goodX,goodY);

	if(goodX>x){
		goodX-=1;
	}
	if(goodX<x){
		goodX+=1;
	}
	if(goodY>y){
		goodY-=1;
	}
	if(goodY<y){
		goodY+=1;
	}

	if(badX>x){
		badX-=1;
	}
	if(badX<x){
		badX+=1;
	}

	if(badY>y){
		badY-=1;
	}
	if(badY<y){
		badY+=1;
	}

	collisionCheck();
	collisionHandle();

	//to make the ball bounce at the edges of canvas
	if(x + r > width || x - r < 0){
		mx=-mx;
	}
	if (y + r > height || y - r < 0) {
		my=-my;
	}
	//move x and y of the ball every frame (10ms)
	x+=mx;
	y+=my;
}

function keydownControl(e){
	if (e.keyCode == 38){
		my = -2;
		mx = 0;
	}
	else if (e.keyCode == 40){
		my = +2;
		mx = 0;
	}
	else if (e.keyCode == 37){
		mx = -2;
		my = 0;
	}
	else if (e.keyCode == 39){
		mx = +2;
		my = 0;
	}
}

init();