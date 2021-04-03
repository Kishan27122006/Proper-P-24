
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var box1,box2,ground1	,paper1
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(700,300,20,150);
    box2 = new Box(900,300,20,150);
	box3=new Box(800,350,250,20)
	paper1=new Paper(100,350,50,50)

    ground1 = new Ground(600,height,1200,20)
	 
	
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  box1.display()
  box2.display()
  box3.display()
  paper1.display()
  key()
  drawSprites();
 
}
function key() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



