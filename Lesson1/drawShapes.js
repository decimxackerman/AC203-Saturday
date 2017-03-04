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

//including images
var poro = new Image();
var house = new Image();

//assigning source to img
poro.src = "piq_300463_400x400.png";
house.src = "house.png";

//draw img on canvas once loaded
poro.onload = function(){
	ctx6.drawImage(poro,300,300,100,100);
}

house.onload = function(){
	ctx6.drawImage(house,400,130,300,270);
}

//setup for sixth canvas
var c6 = document.getElementById('myCanvas6');
var ctx6 = c6.getContext('2d');

//drawing sky and grass
ctx6.fillStyle="green";
ctx6.fillRect(0,350,800,150);
ctx6.fillStyle="cyan";
ctx6.fillRect(0,0,800,350);

//Sun
ctx6.beginPath();
ctx6.arc(100,100,50,0,6.28);
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle="yellow";
ctx6.fill();

//Road
ctx6.beginPath();
ctx6.moveTo(375,350);
ctx6.lineTo(350,500);
ctx6.lineTo(450,500);
ctx6.lineTo(425,350);
ctx6.closePath();
ctx6.fillStyle="grey";
ctx6.fill();
