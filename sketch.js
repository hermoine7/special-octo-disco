const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    chain1 = new slingshot(box.body,{x:200,y:100});
}
function draw(){
chain1.display();
box1.display();
}