  var background1, background1Image;
  var player1, player2, player1Image, player2Image;
  var left, leftImage;
  var right, rightIamge;
  var jump, jumpImage;
  var kick, kickImage;
  var ball, ballImage;

  var gameState = play;
  var play;
  var end;

function preload(){
  
  background1Image = loadImage("Background.jpg")
  player1Image = loadImage("player10.png")
  player2Image = loadImage("player20.png")
  leftImage = loadImage("arrow1.png")
  rightImage = loadImage("arrow2.png")
  jumpImage = loadImage("arrow41.png")
  kickImage = loadImage("arrow42.png")
  
}

function setup() {
 
  background1 = createSprite(200,200)
  background1.addImage(background1Image)
  
}

function draw() {
 
  background("red");
  drawSprites();
  
}