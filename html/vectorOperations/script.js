const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');

let A = new Point(200,100,"red",20,"A");
let B = new Point(100,300,"orange",20,"B");
let C = new Point(100,200,"lightgreen",20,"C");
let D = new Point(600,100,"aliceblue",20,"D");

let a = new Vector2(1,1,"a");
let b = new Vector2(1,1,"b");
let c = new Vector2(1,1,"c");

let ab = new Vector2(1,1,"a+b");
let a2 = new Vector2(1,1,"a2");

A.drag();B.drag();C.drag();

function animationLoop(){
  requestAnimationFrame(animationLoop);
  cont.clearRect(0,0,800,450);
  let num = document.getElementById('num').value;

  A.drawNow();B.drawNow();C.drawNow();
  a.dx = B.x - A.x;
  a.dy = B.y - A.y;
  a.draw(cont,A.x,A.y,1)

  b.dx = C.x - A.x;
  b.dy = C.y - A.y;
  b.draw(cont,A.x,A.y,1);

  ab.sumVector(a,b);
  ab.draw(cont,D.x,D.y,1);

  a2.dx = a.dx;
  a2.dy = a.dy;
  a2.scalairProduct(num);
  a2.label = 'a2 * ' + num;
  a2.draw(cont,A.x,A.y,1);

}
animationLoop();
