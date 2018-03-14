const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');
const button = document.getElementById('maker');


var A,B,C,D,CD_slope,CD_Ybeg,AB_slope,AB_Ybeg,Gx,Gy;


A = new Point(200,100,null,15);
B = new Point(300,100,null,15);
C = new Point(600,300,'red',15);
D = new Point(500,400,'red',15);
G = new Point(null,null,'pink',8);
A.drawNow();B.drawNow();C.drawNow();D.drawNow();
A.drag();B.drag();C.drag();D.drag();G.drag();

function reinit(){
  AB_slope = (A.y-B.y)/(A.x-B.x);
  AB_Ybeg = A.y-(AB_slope*A.x);

  CD_slope = (C.y-D.y)/(C.x-D.x);
  CD_Ybeg = C.y-(CD_slope*C.x);

  Gx = (CD_Ybeg-AB_Ybeg)/(AB_slope-CD_slope);
  Gy = AB_slope*G.x+AB_Ybeg;
}
reinit();


var child = new Line(AB_slope,AB_Ybeg);

var fosterchild = new Line(CD_slope,CD_Ybeg);

child.drawNow();fosterchild.drawNow();G.rePos(Gx,Gy);G.drawNow();

console.log('yuh');



function loop(){
  cont.clearRect(0,0,800,450);
  reinit();
  G.rePos(Gx,Gy);
  fosterchild.reinitialise(CD_slope,CD_Ybeg);
  child.reinitialise(AB_slope,AB_Ybeg);
  child.drawNow();fosterchild.drawNow();A.drawNow();B.drawNow();C.drawNow();D.drawNow();G.drawNow();
}

setInterval(loop,1);
