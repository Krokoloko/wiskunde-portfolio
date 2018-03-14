const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');

let a = new Vector2(100,400);
let b = new Vector2(600,100);
let c = new Vector2(a.dx,a.dy);
let v = new Vector2(1,1);

let A = new Point(a.dx,a.dy,'darkblue',20);
let B = new Point(b.dx,b.dy,'darkblue',20);
let C = new Point(c.dx,c.dy,'gray',15);

let ball = new Point(100,100,10,'cyan');
let pos = new Vector2();

let l = new Line(1,1);
let m = new Line(1,1);

let pass = false;

l.letTwoPointsDefineLine(A,B);
m.slope = -1/l.slope;
m.yIntercept = A.y-(m.slope * A.x);



//l.drawNow();

pos.dx = ball.x;
pos.dy = ball.y;

function loop(){
  cont.clearRect(0,0,canv.width,canv.height);
  requestAnimationFrame(loop);
  c.add(v);
  C.x = c.dx; C.y = c.dy;
  console.log(v.dx + " "+ v.dy);
  A.drawNow();
  B.drawNow();
  C.drawNow();

  a.draw(cont,0,0,1);
  b.draw(cont,0,0,1);

  if(pass == false){
    if(C.x >= B.x && C.y >= B.y){
      pass = !pass;
    }
  }else{
    if(C.x >= A.x && C.y >= A.y){
      pass = !pass;
    }
  }

  if(!pass){
    v.subVector(b,a);
  }else{
    v.subVector(a,b);
  }
  v.r =2;
  v.draw(cont,a.dx,a.dy,1);


}

loop();
