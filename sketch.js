//Declare variable 
// DECLARE VARIABLE
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
 
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
 
}

function draw(){
  background("white");


  drawSprites();

}
