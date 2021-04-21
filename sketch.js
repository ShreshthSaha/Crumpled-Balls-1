
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 720);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*var rect1,rect2,rect3;
	rect1=createSprite(width/2,670,200,20,{isStatic:true} );
	rect1.shapeColor=color(255,0,0)
	World.add(world,rect1);

	rect2=createSprite(width/2+100,620,20,100,{isStatic:true} );
	rect2.shapeColor=color(255,0,0)
	World.add(world,rect2);

	rect3=createSprite(width/2-100,620,20,100,{isStatic:true} );
	rect3.shapeColor=color(255,0,0)
	World.add(world,rect3);*/

	rect1=new Dustbin(width/2,670,200,20);
	rect2=new Dustbin(width/2+100,630,20,100);
	rect3=new Dustbin(width/2-100,630,20,100);
	ground=new Ground(900,height, 1800, 20 );
	paper=new Paper(500,678,20,{isStatic:false});
	
	keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  paper.display();
 
  drawSprites();
 
}

function keyPressed(){

    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-15});



}
}
