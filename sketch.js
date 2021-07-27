const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
function preload(){
  playerBaseImage = loadImage("./assets/base1.png");
  computerBaseImage = loadImage("./assets/base2.png");
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new Base(width - 300, random(450, height - 300),180,150, computerBaseImage);
   playerBase = new Base(300, random(450, height - 300),180,150, playerBaseImage);

   player = new Players(285,playerBase.body.position.y-153,50,180);
   computerPlayer = new Players(width-285, computerBase.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerBase.display();
  playerBase.display();

  //display player and computer
  player.display();
  computerPlayer.display();
  
  


}
