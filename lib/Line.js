class Line{
  constructor(slope,yIntercept){
    this.slope = slope;
    this.yIntercept = yIntercept;
  }
  calcY(x)
  {
    let y = this.slope * x + this.yIntercept;
    return y;
  }
  drawNow(a,b){
    let beg = a || 0;
    let end = b || 800;
    cont.beginPath();
    cont.moveTo(beg,this.calcY(beg));
    cont.lineTo(end,this.calcY(end));
    cont.stroke();
    cont.closePath();
  }

  inverseSlope(){
    return -1/this.slope;
  }

  reinitialise(slope,yIntercept){
    this.slope = slope;
    this.yIntercept = yIntercept;
  }
  letTwoPointsDefineLine(A,B){
    this.slope = (A.y-B.y)/(A.x-B.x);
    this.yIntercept =  A.y-(this.slope*A.x);
  }
}
