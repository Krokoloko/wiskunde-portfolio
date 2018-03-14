class Point {
  constructor(x,y,color,r,label) {
    this.color = color || 'green';
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 30;
    this.drog = null;
    this.label = label || "";
  }
  drawNow(){
    //console.log('ff tekunu');
    cont.beginPath();
    cont.fillStyle= this.color;
    cont.arc(this.x,this.y,this.r,0,2*Math.PI);
    cont.stroke();
    cont.fill();
    cont.closePath();
    cont.fillStyle = "black";
    cont.font = "20px Arial";
    cont.strokeText(this.label,this.x-10,this.y-(this.r+10));
    cont.fillText(this.label,this.x-10,this.y-(this.r+10));
  }

  rePos(x,y){
    this.x = x;
    this.y = y;
  }

  drag(){
    this.drog = false;
    let xMouse,yMouse,dx,dy,dist;

    canv.addEventListener('mousedown',(evt)=>{
      let rect = canv.getBoundingClientRect();
      xMouse = evt.clientX - rect.left;
      yMouse = evt.clientY - rect.top;
      dy = yMouse - this.y;
      dx = xMouse - this.x;
      dist = Math.sqrt(dx * dx + dy * dy);
      console.log(this.x,this.y,dx,dy,dist);
      // if(){
      //   canv.style.cursor = 'pointer';
      // }else{
      //   canv.style.cursor = ''
      // }
      if(dist<=this.r && !this.drog){
        this.drog = true;
      }
      else{
        this.drog = false;
      }
    })


    canv.addEventListener('mousemove',(evt)=>{
      if(this.drog){
        let rect = canv.getBoundingClientRect();
        xMouse = evt.clientX - rect.left;
        yMouse = evt.clientY - rect.top;
        dx = xMouse - this.x;
        dy = yMouse - this.y;
        this.x = xMouse;
        this.y = yMouse;
      }
    })
  }
}
