var canvas;
var music;
var ground1;
var ground2;
var ground3;
var ground4;
var ball;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1=createSprite(100,590,180,20);
    ground1=shapeColor="green";

    ground2=createSprite(300,590,180,20);
    ground2=shapeColor="blue";

    ground3=createSprite(500,590,180,20);
    ground3=shapeColor="yellow";

    ground4=createSprite(100,590,180,20);
    ground4=shapeColor="red";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),200,20,20);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=4;
}

function draw() {
    background(rgb(83,19,16));
    //create edgeSprite
  edge=createEdgeSprites();
  ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(ground1.isTouching(ball) && ball.bounceOff(ground1)){
        ball.shapeColor="green";
        music.play();
    }

        if(ground2.isTouching(ball) && ball.bounceOff(ground2)){
            ball.shapeColor="blue";
            music.stop();
        }

            if(ground3.isTouching(ball) && ball.bounceOff(ground3)){
                ball.shapeColor="yellow";}

                if(ground4.isTouching(ball) && ball.bounceOff(ground4)){
                    ball.shapeColor="red";}
                    drawSprites();
    }
        