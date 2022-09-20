var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png");

}

function setup(){
 createCanvas(400,400);
 
 boy=createSprite(200,200,30,20)
boy.addAnimation("boy",boyImg)
boy.scale=0.07

path=createSprite(200,200);
  path.addImage(pathImg);
    path.velocityY=4;
    path.scale=0.3;

 


// Movendo o fundo 
   path=createSprite(200,200);
 path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

// path.scale=0.3

//Criando menino que corre 


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(400,0,100,800);
leftBoundary.visible = true;


//Crie Boundary direito 
rightBoundary=createSprite(0,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
  boy.x=World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  
  
  

 //Reiniciar o fundo
 path=createSprite(200,200);
 path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;


 drawSprites();

 }




