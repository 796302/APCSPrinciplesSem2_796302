function Ball(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0, 0.5);

  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    if(this !== tMouse){
      var d = this.loc.dist(tMouse.loc);
      if(d > 1){
        var steeringForce = p5.Vector.sub(mouseX, mouseY, this.loc);
        steeringForce.normalize();
        steeringForce.mult(.5);
        this.vel.add(steeringForce);

      }
      // if(d < 200){
      //   var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
      //   steeringForce.normalize();
      //   steeringForce.mult(.7);
      //   this.vel.add(steeringForce);
      // }
      this.loc.add(this.vel);

    }

  }
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function(){
    // fill(this.col);
    // ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    var centerVec = createVector(width/2, height/2);
    var dist = this.loc.dist(centerVec);
    var clrR = map(dist, 0, 100, 30, 50)
    var clrG = map(dist, 0, 100, 0 , 188)
    var clrB = map(dist, 0, 100, 20 , 60)
    stroke(clrR, clrG, clrB, 150);
    strokeWeight(13);
    // line(this.loc.x, this.loc.y, redBall.loc.x, redBall.loc.y);

    arc(this.loc.x,this.loc.y,2,50,50,2*Math.PI);

  }
}//  end of constructor
