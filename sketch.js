const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options= {
    restitution:0.95
  }

  ground= new Ground(200,390,400,20)
  rightwall = new Ground(390,200,20,400)
  leftwall = new Ground(10,200,20,400)
  topwall = new Ground(200,10,400,20)
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world, ball)

   btn1= createImg('right.png');
   btn1.position(220,30);
   btn1.size(50,50);
   btn1.mouseClicked(hforce)
   
   btn2 = createImg('up.png')
   btn2.position(20,30)
   btn2.size(50,50)
   btn2.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  rightwall.show()
  leftwall.show()
  topwall.show()
  ellipse(ball.position.x,ball.position.y,20)

}

function hforce(){

  Matter.Body.applyForce(ball, {x:0, y:0 }, {x:0.05, y:0})
}

function vforce(){

  Matter.Body.applyForce(ball, {x:0, y:0},{x:0, y: -0.05})
}