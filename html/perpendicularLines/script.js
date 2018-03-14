const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');
const button = document.getElementById('maker');


var A,B,CD_slope,CD_Ybeg,AB_slope,AB_Ybeg,Gx,Gy;


A = new Point(200,100,null,15);
B = new Point(300,100,null,15);
G = new Point(220,400,'gray',8);
A.drawNow();B.drawNow();

A.drag();B.drag();

function reinit(){
  AB_slope = (A.y-B.y)/(A.x-B.x);
  AB_Ybeg = A.y-(AB_slope*A.x);

  CD_slope = -1/AB_slope;
  CD_Ybeg = CD_slope*(1+AB_Ybeg);

  Gx = (CD_Ybeg-AB_Ybeg)/(AB_slope-CD_slope);
  Gy = AB_slope*G.x+AB_Ybeg;

}
AB_slope = (A.y-G.y)/(A.x-G.x);
AB_Ybeg = A.y-(AB_slope*A.x);
CD_slope = -1/AB_slope;
CD_Ybeg = CD_slope*(1+AB_Ybeg);

//reinit();



var child = new Line(AB_slope,AB_Ybeg);

var fosterchild = new Line(CD_slope,CD_Ybeg);

child.drawNow();fosterchild.drawNow();G.drawNow();

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
