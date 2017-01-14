// alert("its working");

var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");

ctx.moveTo(0,0); //move pen to coordinate 0,0
ctx.lineTo(150,150); //draw a line to this position
ctx.stroke(); // asking the pen to draw

//drawing on Canvas 2
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle="rgb(128,128,128)" //this has to be a string
ctx2.fillRect(100,100,100,100); // (x,y,width,height)
ctx2.strokeRect(80,80,140,140);
ctx2.clearRect(120,120,60,60);

//drawing on Canvas 3
var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");

ctx3.fillStyle="rgb(128,128,128)"
ctx3.fillRect(0,0,150,150);
ctx3.fillRect(150,150,150,150);

//drawing on Canvas 4
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");

ctx4.fillStyle="rgb(128,128,128)"
ctx4.fillRect(0,0,300,300);
ctx4.clearRect(20,20,120,120);
ctx4.clearRect(20,160,120,120);
ctx4.clearRect(160,20,120,120);
ctx4.clearRect(160,160,120,120);

//drawing on Canvas 5
var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");

ctx5.fillStyle="rgb(128,128,128)"
ctx5.fillRect(0,0,100,100);
ctx5.fillRect(200,0,100,100);
ctx5.fillRect(100,100,100,100);
ctx5.fillRect(0,200,100,100);
ctx5.fillRect(200,200,100,100);
ctx5.fillRect(200,200,100,100);

//drawing on Canvas 6
var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");

var x = 0;
var y = 0;
var width = 300;
var height = 300;

ctx6.fillStyle="rgb(128,128,128)"
ctx6.fillRect(x,y,width,height);

while (width > 0){
	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;

	ctx6.clearRect(x,y,width,height);

	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;

	ctx6.fillRect(x,y,width,height);
}







