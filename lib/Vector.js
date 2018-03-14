class Vector2 {
  constructor(dx,dy,label) {
    this._dx = dx;
    this._dy = dy;
    this._r = Math.sqrt(this.dx*this.dx+this.dy*this.dy);
    this._angle = Math.atan2(this.dy,this.dx);
    this.label = label || '';
  }
  draw(context,x,y,scale){
    let h = 5;
    let ah = 20;
    let aw = 30;
    context.fillStyle = 'pink';
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(this._angle);
    context.moveTo(0,0);
    context.lineTo(0,h);
    context.lineTo(this._r*scale-aw,h);
    context.lineTo(this._r*scale-aw,ah);
    context.lineTo(this._r*scale,0)
    context.lineTo(this._r*scale-aw,-ah);
    context.lineTo(this._r*scale-aw,-h);
    context.lineTo(0,-h);
    context.lineTo(0,0);
    context.stroke();
    context.fill();
    context.closePath();
    cont.fillStyle = "black";
    cont.font = "20px Arial";
    cont.strokeText(this.label,this.r*scale*0.5,-h);
    cont.fillText(this.label,this.r*scale*0.5,-h);
    context.restore();
  }
  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }
  addVector(a,b){
    this.dx = a.dx+b.dx;
    this.dy = a.dy+b.dy;
  }

  divVector(a,b){
    this.dx = a.dx/b.dx;
    this.dy = a.dy/b.dy;
  }

  sumVector(a,b){
    this.dx = a.dx + b.dx;
    this.dy = a.dy + b.dy;
  }

  subVector(a,b,str){
    let n = str || "vector";
    if(n == "vector"){
      this.dx = a.dx-b.dx;
      this.dy = a.dy-b.dy;
    }if(n == "point"){
      this.dx = a.x-b.x;
      this.dy = a.y-b.y;
    }
  }

  scalairProduct(num){
    this.dx = this.dx*num;
    this.dy = this.dy*num;
  }

  get angle(){
    return Math.atan2(this.dy,this.dx);
  }

  get r(){
    return Math.sqrt(this.dx*this.dx+this.dy*this.dy);
  }
  get dy(){
    return this._dy;
  }
  set r(input){
    if(input < 0){
      this.angle += Math.PI;
    }

    this._r = Math.abs(input);;
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }
  set angle(input){
    this._angle = input;
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }
  get dx(){
    return this._dx;
  }

  set dx(input){
    this._dx = input;
    this._r = Math.sqrt(this.dx*this.dx+this.dy*this.dy);
    this._angle =  Math.atan2(this.dy,this.dx);

  }

  set dy(input){
    this._dy = input;
    this._r = Math.sqrt(this.dx*this.dx+this.dy*this.dy);
    this._angle =  Math.atan2(this.dy,this.dx);
  }
}
