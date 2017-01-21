var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="magenta";
//move our pen here
ctx.moveTo(150,50);
//draw a line to this point
ctx.lineTo(50,200);
ctx.lineTo(250,200);
ctx.closePath();
//to actually draw it
ctx.stroke();
ctx.fillStyle="#33FFDE"
ctx.fill();

//canvas2
var c = document.getElementById("myCanvas2");
var ctx2 = c.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle="magenta";

ctx2.moveTo(75,0);

ctx2.lineTo(0,150);
ctx2.lineTo(75,300);
ctx2.lineTo(150,150);

ctx2.closePath();

ctx2.stroke();
ctx2.fillStyle="#33FFDE"
ctx2.fill();

//canvas3
var c = document.getElementById("myCanvas3");
var ctx3 = c.getContext('2d');

ctx3.beginPath();
ctx3.strokeStyle="magenta";

ctx3.moveTo(0,0);

ctx3.lineTo(0,300);
ctx3.lineTo(300,0);
ctx3.lineTo(300,300);

ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="#33FFDE"
ctx3.fill();

//canvas4
var c = document.getElementById("myCanvas4");
var ctx4 = c.getContext('2d');

ctx4.beginPath();
ctx4.strokeStyle="magenta";

ctx4.moveTo(0,0);

ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(150,150);
ctx4.lineTo(150,0);
ctx4.lineTo(300,0);
ctx4.lineTo(0,300);
ctx4.lineTo(150,300);
ctx4.lineTo(150,150);
ctx4.lineTo(0,150);

ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="#33FFDE";
ctx4.fill();

//canvas5
var c = document.getElementById("myCanvas5");
var ctx5 = c.getContext('2d');

ctx5.beginPath();
ctx5.strokeStyle="magenta";
ctx5.arc(150,150,80,0,6.28); //(midpoint) x,y,radius,start angle, end angle
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="#33FFDE";
ctx5.fill();

//canvas6
var c = document.getElementById("myCanvas6");
var ctx6 = c.getContext('2d');

//drawing sky and grass first
ctx6.fillStyle="#59C66B";
ctx6.fillRect(0,350,800,150);
ctx6.fillStyle="#7DECDE";
ctx6.fillRect(0,0,800,350);

//drawing sun
ctx6.beginPath();
ctx6.strokeStyle="white";
ctx6.arc(80,80,50,0,6.28); //(midpoint) x,y,radius,start angle, end angle
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle="yellow";
ctx6.fill();

//drawing road
ctx6.beginPath();
ctx6.moveTo(375,350);
ctx6.lineTo(350,500);
ctx6.lineTo(425,500);
ctx6.lineTo(425,350);
ctx6.stroke();
ctx6.fillStyle="grey";
ctx6.fill();










