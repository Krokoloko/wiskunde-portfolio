const canv = document.getElementById('canvas');
const cont = canv.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(3,4);

let player = new Point(position.dx,position.dy,'green',10,"A");
let bullets = [];
window.addEventListener('keydown',(evt)=>{
  console.log(evt.keyCode);

  switch (evt.keyCode) {
    case 65:
        velocity.angle -= 0.01;
        break;
    case 68:
        velocity.angle += 0.01;
        break;
    case 87:
        velocity.r++;
        break;
    case 83:
        velocity.r--;
        break;
    case 32:
      let bullet = {};
      bullet.position = new Vector2(position.dx,position.dy);
      bullet.point = new Point(bullet.position.dx,bullet.position.dy,'red',10,"");
      bullets.push(bullet);
        break;
    default:
      console.log("no input");
      break;
  }
})

function animationLoop(){
  cont.clearRect(0,0,800,450);
  requestAnimationFrame(animationLoop);
  player.x = position.dx; player.y = position.dy;
  position.add(velocity);
  player.drawNow();
  velocity.draw(cont,player.x,player.y,50);
  //direction.draw(cont,player.x,player.y,50,'dir');
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].point.drawNow();
  }

  if(position.dx < 0){
    position.dx = 800;
  }
  if(position.dx > 800){
    position.dx = 0;
  }
  if(position.dy > 450){
    position.dy = 0;
  }
  if(position.dy < 0){
    position.dy = 450;
  }
}
animationLoop();
