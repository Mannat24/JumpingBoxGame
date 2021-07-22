var canvas;
var music;
var surface1,surface2,surface3,surface4;
var Box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();

    //create 4 different surfaces
    surface1 = createSprite(135,550,150,20);
    surface1.shapeColor = "red";

    surface2 = createSprite(290,550,145,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite(440,550,145,20);
    surface3.shapeColor = "green";

    surface4 = createSprite(594,550,150,20);
    surface4.shapeColor = "yellow";





    //create box sprite and give velocity
    Box = createSprite(400,200,30,30)
    Box.shapeColor = "white";
    Box.velocityX = 2;
    Box.velocityY = 5;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    Box.bounceOff(edges);


    
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(Box) && Box.bounceOff(surface1)){

        Box.shapeColor = "red";
    }

    if(surface2.isTouching(Box) && Box.bounceOff(surface2)){

        Box.shapeColor = "blue";
        Box.velocityX = 0;
        Box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(Box) && Box.bounceOff(surface3)){

        Box.shapeColor = "green";
    }

    if(surface4.isTouching(Box) && Box.bounceOff(surface4)){

        Box.shapeColor = "yellow";
    }










    drawSprites();
}
