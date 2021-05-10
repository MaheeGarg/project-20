var cat, catAnimation;
var mouse, mouseanimation;
var garden , gardenImage
function preload() {
    //load the images here
catAnimation = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
mouseAnimation = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat.createSprite(800,600,20,20);
    cat.addAnimation("catteasing",catAnimation);
    mouse.createSprite(500,550,20,20);
    mouse.addAnimation("mouserunning",mouseAnimation);

}

function draw() {

    background("blue");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
