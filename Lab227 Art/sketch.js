//  Global variables
var Balls = [];
var redBall;
var toggle;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255,255,255);
  loadBalls(600);

}

function draw() {
  if(!toggle){
  background(255, 255, 255, 25);
  redBall.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();


  }
}
}

function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    var location = createVector(random(width), random(height));
    var velocity = createVector(random(1.5,2), random(1.5,2));
    var r = random(20,40);
    var col = color(255, 255, 255);
    Balls.push(new Ball(location, velocity, r, col));
  }

  var location = createVector(width/2, height/2);
  var velocity = createVector(0,0);
  var r = 0;
  var col = color(255, 0, 0);
  redBall = new Ball(location, velocity, r, col);
}
function mousePressed(){
  toggle = !toggle;
}
