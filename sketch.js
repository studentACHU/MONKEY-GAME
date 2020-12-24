
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;
var play=1;
var end=0;
var gamestate=play;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
   FoodGroup =new Group();
   oGroup =  new Group();
    mGroup =  new Group();
  
  monkey = createSprite(30,315,20,20);  
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
   mGroup.add(monkey);
    
  
  
  
  ground = createSprite(400,350,600,10);
  ground.shapeColor="brown";
  ground.x=ground.width/2;

}


function draw() {
background("lightblue");
  
  
   if(keyDown("space")){
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
   
  console.log(monkey.y);
  
  if (monkey.y===300
){
    monkey.velocityY=-5;
    
    
  }
   
  if(FoodGroup.isTouching(monkey)){
    
    gamestate=play;
    FoodGroup.destroyEach();
    
  }
  
  
  
  
  if(gamestate===play){
    
  banana();
  obstacle();
    if(oGroup.isTouching(monkey)){
    
    
    gamestate=end;
 // score.visibility=false;
      
  }
  score=score+1;  
    
    
  }
  else if(gamestate===end){
  FoodGroup.setVelocityXEach(0);
   oGroup.setVelocityXEach(0);
  
  
  
}  
      if(oGroup.isTouching(monkey)){
    
    
    gamestate=end;
  score.visibility=false;
      
  }
  textSize(25);
  text("survival time:"+score,40,40);
  
  drawSprites();
  
}
 
function banana(){
  if(frameCount%120===0){
    Banana=createSprite(500,250,20,20);
    Banana.velocityX=-10;
    Banana.addAnimation("banana",bananaImage);
    Banana.scale=0.1;
    FoodGroup.add(Banana);
    
  }
  
  
  
  
}
function obstacle(){
  
  if(frameCount%100===0){
    
    Obstacle=createSprite(500,328,20,20);
    Obstacle.velocityX=-10;
    Obstacle.addAnimation("obstacle",obstaceImage);
    Obstacle .scale=0.1;
    oGroup.add(Obstacle);
    
  }
  
  
  
}
