var bg, bgImg;
var cactus, cactusImg;
var player, playerImg;

function preload(){
 bgImg = loadImage("assets/background.jpg");
 cactusImg = loadImage("assets/cactus.png");
 playerImg = loadImage("assets/idle.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2);
  bg.addImage(bgImg);
  bg.scale = 4.1;
  cactus = createSprite(600,560);
  cactus.addImage(cactusImg);
  player = createSprite(300,560);
  player.addImage(playerImg);
}

function draw(){
 
  drawSprites();
}