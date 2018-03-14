const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function pitagoras(a,b){
  let A = a.dx - b.dx;
  let B = a.dy - b.dy;
  let C = Math.sqrt((Math.pow(A,2) + Math.pow(B,2)));
  return C;
}

let ballNum = 20;
let speed = 5;
let dist, trav;
let wayPoints = [];

// let a = new Vector2(100,400);
// let b = new Vector2(600,100);

for(let i = 0;i < ballNum;i++){
  let obj = {};
  obj.vector = new Vector2((Math.random()*(canv.width-50))+50,(Math.random()*(canv.height-50))+50,'');
  obj.point = new Point(obj.vector.dx,obj.vector.dy,'blue',7,'');
  wayPoints.push(obj);
}
console.log(wayPoints);
let c = new Vector2(wayPoints[0].point.x,wayPoints[0].point.y);
let v = new Vector2(1,1);
let C = new Point(c.dx,c.dy,'green',15);

// let A = new Point(a.dx,a.dy,'darkblue',20);
// let B = new Point(b.dx,b.dy,'darkblue',20);

// let l = new Line(1,1);
// let m = new Line(1,1);



// l.letTwoPointsDefineLine(A,B);
// m.slope = -1/l.slope;
// m.yIntercept = A.y-(m.slope * A.x);



//l.drawNow();
addEventListener('mousedown',(evt)=>{
  console.log(wayPoints);
});


dist = pitagoras(wayPoints[0].vector, wayPoints[1].vector);

function loop(){
  cont.clearRect(0,0,canv.width,canv.height);
  requestAnimationFrame(loop);
  c.add(v);
  C.x = c.dx; C.y = c.dy;

  for(let i = 0;i < wayPoints.length;i++){
    wayPoints[i].point.drawNow();
  }
  v.subVector(wayPoints[1].vector,wayPoints[0].vector);

  trav = pitagoras(wayPoints[0].vector,c);
  if(dist <= trav){
    let a = wayPoints.shift();
    wayPoints.push(a);
    dist = pitagoras(wayPoints[0].vector,wayPoints[1].vector);
  }

  C.drawNow();
  // a.draw(cont,0,0,1);
  // b.draw(cont,0,0,1);

  v.r = speed;
  v.draw(cont,50,50,3);
  // if(pass == false){
  //   if(C.x >= B.x && C.y >= B.y){
  //     pass = !pass;
  //   }
  // }else{
  //   if(C.x >= A.x && C.y >= A.y){
  //     pass = !pass;
  //   }
  // }
  //
  // if(!pass){
  //   v.subVector(b,a);
  //   v.subVector(a,b);
  // }else{
  // }
  // v.draw(cont,a.dx,a.dy,1);


}

loop();
