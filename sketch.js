
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bobObject1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(410,300,300,20);
bobObject1=new Bob(342,500,20)
bobObject2=new Bob(300,500,20)
bobObject3=new Bob(385,500,20)
bobObject4=new Bob(428,500,20)
bobObject5=new Bob(470,500,20)
rope1=new Rope(bobObject1.body,roof.body,-70,0);
rope2=new Rope(bobObject2.body,roof.body,-110,0);
rope3=new Rope(bobObject3.body,roof.body,-30,0);
rope4=new Rope(bobObject4.body,roof.body,+15,0);
rope5=new Rope(bobObject5.body,roof.body,+60,0);


}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display()
  bobObject5.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-5,y:5})
  
	}
	}


