
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	 var ball_options = {
		restitution: 0.95,
		frictionAir:0.01

	  }

	  var ground_options ={
		isStatic: true
	  };

	  var ball_options2 = {
		restitution: 1,
		frictionAir:0.05

	  }

	Engine.run(engine);

	ground = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	
	ball2 = Bodies.circle(90,30,10,ball_options2);
	World.add(world,ball2);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();


  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,10);
  rect(ground.position.x,ground.position.y,400,20);
}



