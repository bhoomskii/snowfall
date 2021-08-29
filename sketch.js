const Engine=Matter.Engine
const World = Matter.World
const Bodies=Matter.Bodies
var snow=[]
var engine, world
var ground 

function preload(){
  bg=loadImage("snow2.jpg");
}
function setup() {
  createCanvas(1200,600);
  engine=Engine.create()
  world=engine.world 
  ground =new Ground(600,580,1200,30)

}

function draw() {
  background(bg);  
  Engine.update(engine)
  ground.display()
  if (frameCount%30===0){
    snow.push(new Snow(random(-10, width),-10,20,20))    
  }
  for(var i=0; i<snow.length;i++){
    snow[i].display()
  }
}