//class24 - 33: ANGRY BIRDS GAME
//Developer:Arya 
//Topics: PhysicsEngine, Inheritance, JSON, API, functions, Arrays, Push()pop()



//Declare variables for game objects and behaviour indicators(FLAGS)

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var userEngine, userWorld;


var bird;
var slingshot;
var pig1, pig2;
var platform, ground;
var log1, log2, log3, log4;
var box1, box2, box3, box4, box5;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {

}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
    var canvas = createCanvas(1200, 400);

    userEngine = Engine.create();
    userWorld = userEngine.world;


    ground = new Ground(600, height - 30, 1200, 20);

    bird = new Bird(200, 100);

    //creation of 1st layer using matter.js
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    //creation of 2nd layer using matter.js
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig2 = new Pig(810, 220);
    log2 = new Log(810, 180, 300, PI / 2);

    //creation of 3rd layer using matter.js
    box5 = new Box(810, 160, 70, 70);
    log3 = new Log(760, 120, 150, PI / 7);
    log4 = new Log(870, 120, 150, -PI / 7);


    //https://www.javascripttutorial.net/web-apis/javascript-rotate/
    //https://www.javascripttutorial.net/web-apis/javascript-rotate/
    //https://brilliant.org/wiki/objects/

}


//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.

function draw() {
    background(0);

    Engine.update(userEngine);

    ground.display();

    bird.display();

    //display  of 1st layer using matter.js
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    //display of 2nd layer using matter.js
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    //display of 3rd layer using matter.js
    box5.display();
    log3.display();
    log4.display();


}