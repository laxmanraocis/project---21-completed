var canvas;
var music;
var box;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
    
}

function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
    surface1 = createSprite(100,750,200,50);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,750,200,50);
    surface2.shapeColor = "green";
    
    surface3 = createSprite(500,750,200,50);
    surface3.shapeColor = "blue";

    surface4 = createSprite(700,750,200,50);
    surface4.shapeColor = "black";

  //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.velocityY = 3;
    box.scale = 0.30;

}

function draw() {
    background("pink");
    //create edgeSprite
    egdes = createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "red";
        
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "green";


    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = "blue";
    
    }

    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = "black";
    

    }
    drawSprites();
}
