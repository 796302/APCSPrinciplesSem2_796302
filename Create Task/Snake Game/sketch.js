//snake object
var snake;
//food all in the array
var food = [];

var numSeg = 1;
//set up start screen
var start = "true"
//point system/number of segments
var score = 0;
function setup(){
//speed of game
fSlider = createSlider(0, 50, 10);
fSlider.position(780, 5);
frameRate(frames);

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadSnake();
  loadFood(1);

}


function draw(){
  frames = fSlider.value();
  frameRate(frames);
  background(20, 20, 20);
  textSize(10)
  text("score:" + score, 30, 30);
  snake.run();
//repeat placement of food
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }
//call functions
  checkLoc();
  deadGame();
  gameStart();
  checkFood();
}
//eat the food
function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      console.log(snake.segments.length)
      score++;
    }
  }
}

//creates snake
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
//creates a location for the food that goes into the food array
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    //random x & y for 0-800
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}

//movement for keys when pressed
function keyPressed(){
   start = "false"
//up arrow
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
//down arrow
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
//right arrow
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
//left arrow
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}
//if dead then show end screen
function deadGame(){
  if(snake.status == "true"){
    textFont()
      fill(255, 255, 255);
      rect(125, 275, 550, 200);
      fill(0, 0, 0);
      textAlign(CENTER);
      textSize(50);
      text("You Lose", 400, 350)
      text("Press w to restart", 400, 425)

//w to restart game
    if(keyCode === 87){
      snake = 0
      loadSnake();
      gameStart();
      checkFood();
      score = 0;

    }
  }
}
//when first started - show start screen
function gameStart(){
  if(start == "true"){
    textFont()
    fill(255, 255, 255);
    rect(125, 275, 550, 200);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(50);
    text("Snake Game", 400, 350)
    text("Press any key to start", 400, 425)
  }
}

//create wall around Food
function checkFood(){
  for(var i = 0; i < food.length; i ++){
    var distX = food[i].loc.x
    var distY = food[i].loc.y
    fill(255, 255, 255)
    rect(distX + 20, distY + 20, 20, 20);
    rect(distX + 20, distY - 20, 20, 20);
    rect(distX - 20, distY + 20, 20, 20);
    rect(distX - 20, distY - 20, 20, 20);
if((food[i].loc.x + 20 == snake.loc.x) && (food[i].loc.y + 20 == snake.loc.y) ||
(food[i].loc.x + 20 == snake.loc.x) && (food[i].loc.y - 20 == snake.loc.y) ||
(food[i].loc.x - 20 == snake.loc.x) && (food[i].loc.y + 20 == snake.loc.y) ||
(food[i].loc.x - 20 == snake.loc.x) && (food[i].loc.y - 20 == snake.loc.y)){
  if(snake.status == "false"){
    textFont()
      fill(255, 255, 255);
      rect(125, 275, 550, 200);
      fill(0, 0, 0);
      textAlign(CENTER);
      textSize(50);
      text("You Lose", 400, 350)
      text("Press w to restart", 400, 425)

//w to restart game
    if(keyCode === 87){
      snake = 0
      loadSnake();
      gameStart();
      checkFood();
      score = 0;

    }
  }

      }
    }
  }
