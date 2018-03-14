const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');
const button = document.getElementById('maker');


var A,B;

A = new Point(40,30,null,15);
B = new Point(70,40,null,15);
A.drawNow();B.drawNow();
A.drag();B.drag();

var slope = (A.y-B.y)/(A.x-B.x);
var Ybeg = A.y-(slope*B.x);

var child = new Line(slope,Ybeg);

console.log('yuh');

function loop(){
  cont.clearRect(0,0,800,450);
  slope = (A.y-B.y)/(A.x-B.x);
  Ybeg = A.y-(slope*A.x);

  child.reinitialise(slope,Ybeg);
  A.drawNow();B.drawNow();child.drawNow();
}

setInterval(loop,1);
