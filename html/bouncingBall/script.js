const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');

var balls = [];

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
console.log(canv.height + ' ' + canv.width);

for(let i = 0;i < 5;i++){
  let ball = {};
  ball.point = new Point(clamp(Math.random()*700,100,700),clamp(Math.random()*350,150,350),'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')',clamp(Math.random()*14,10,14),'ball ' + (i+1));
  console.log(ball.point);
  ball.pos = new Vector2(ball.point.x,ball.point.y);
  ball.vel = new Vector2(clamp(Math.random()*20,3,20),clamp(Math.random()*8,2,8));
  ball.acc = new Vector2(0,1);
  ball.Epots = canv.height*ball.acc.dy - ball.pos.dy;
  balls.push(ball);
}

function animationLoop(){
  requestAnimationFrame(animationLoop);
  cont.clearRect(0,0,800,450);
  for(let i = 0;i<balls.length;i++){
    balls[i].point.y = balls[i].pos.dy;
    balls[i].point.x = balls[i].pos.dx;
    balls[i].pos.add(balls[i].vel);
    balls[i].vel.add(balls[i].acc);

    if(balls[i].pos.dx < 0 || balls[i].pos.dx > canv.width){
        balls[i].vel.dx = -balls[i].vel.dx;
    }
    if(balls[i].pos.dy < 0 || balls[i].pos.dy > canv.height){
        balls[i].vel.dy = Math.sqrt(2*balls[i].Epots);
        balls[i].vel.dy = -balls[i].vel.dy;
    }
    balls[i].point.drawNow();
    balls[i].vel.draw(cont,balls[i].point.x,balls[i].point.y,6);
  }
}

animationLoop();
