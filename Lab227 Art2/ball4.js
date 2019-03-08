function Ball(loc, rad, col){
  // Instance variables
  this.acc = createVector(0,.1);
  this.loc = loc;
  this.vel = createVector(random(-3,3), random(-3,3));
  this.rad = rad;
  this.col = col;



  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){

    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  // render() draws the ball at the new location
  this.render = function(){

    var centerVec = createVector(width/2, height/2);
    var dist = this.loc.dist(centerVec);
    var clrR = map(dist, 0, 200, 70, 230)
    var clrG = map(dist, 0, 100, 50, 100)
    var clrB = map(dist, 0, 400, 30, 70)
    stroke(clrR, clrG, clrB, 150);
    strokeWeight(.5);
    curve(b1.loc.x, b1.loc.y, b2.loc.x, b2.loc.y, b3.loc.x , b3.loc.y, b4.loc.x, b4.loc.y);
    //line(b1.loc.x, b1.loc.y, b2.loc.x , b2.loc.y);




  }


}
