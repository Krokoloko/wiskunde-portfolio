const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');
const button = document.getElementById('maker');


var A,B,C,AB_slope,AB_Ybeg;


A = new Point(200,100,null,15);
B = new Point(300,100,null,15);
C = new Point(500,300,'red',15);

A.drawNow();B.drawNow();C.drawNow();
A.drag();B.drag();C.drag();

function reinit(){
  AB_slope = (A.y-B.y)/(A.x-B.x);
  AB_Ybeg = A.y-(AB_slope*A.x);
}
reinit();

console.log(C.y + " " +C.x+" ");

var child = new Line(AB_slope,AB_Ybeg);

child.drawNow();

console.log('yuh');

function beneath(l,compareablePoint){
  let x = compareablePoint.x;
  let compare = l.calcY(x);
  let r = compareablePoint.r;
  if((compare + r) >= compareablePoint.y || (compare - r) >= compareablePoint.y){
    compareablePoint.setColor("green");
    console.log("green");
  }else{
    compareablePoint.setColor("red");
    console.log("red");
  }
}

beneath(child,C);

function loop(){
  cont.clearRect(0,0,800,450);
  reinit();
  beneath(child,C);
  child.reinitialise(AB_slope,AB_Ybeg);
  child.drawNow();A.drawNow();B.drawNow();C.drawNow();
}

setInterval(loop,1);
