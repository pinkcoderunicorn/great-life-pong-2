

var you;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10;
var b1,b2,b3,b4,b5,b6;

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    
  you= createSprite(displayWidth/2, displayHeight,30,30);
  
  maze1 = createSprite(displayWidth/4,100,20,displayHeight-100);
  maze2 = createSprite(displayWidth*3/4,100,20,displayHeight-100);
  maze3 = createSprite(displayWidth/2-50,-285,displayHeight-280,20);
  maze4 = createSprite(displayWidth/2+50,displayHeight-400,displayHeight-280,20);
  maze5 = createSprite(displayWidth/2-50,displayHeight/2-100,displayHeight-280,20);
  maze6 = createSprite(displayWidth/2+50,displayHeight/2-200,displayHeight-280,20);
  maze7 = createSprite(displayWidth/2-50,displayHeight/2-300,displayHeight-280,20);
  maze8 = createSprite(displayWidth/2+50,displayHeight/2-400,displayHeight-280,20);
  maze9 = createSprite(displayWidth/2-50,displayHeight/2-500,displayHeight-280,20);
  maze10 = createSprite(displayWidth/2+50,displayHeight/2-600,displayHeight-280,20);
  b1 = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight/2-150,20,20);
  b2 = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight/2-250,20,20);
  b3 = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight/2-350,20,20);
  b4 = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight/2-450,20,20);
  b5 = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight/2-550,20,20);
  b6 = createSprite(random(displayWidth/2-200,displayWidth/2+200),displayHeight/2-650,20,20);

}

function draw(){
    background("black");

    camera.position.x=you.x;
    camera.position.y=you.y;


    if(keyDown("up")){
   you.y= you.y-5;
    }

    if(keyDown("down")){
        you.y= you.y+5;
         }
         
    if(keyDown("left")){
            you.x= you.x-5;
             }

    if(keyDown("right")){
                you.x= you.x+5;
                 }

  if(you.isTouching(maze1)||you.isTouching(maze2)||you.isTouching(maze3)||you.isTouching(maze4)||you.isTouching(maze5)||you.isTouching(maze6)||you.isTouching(maze7)||you.isTouching(maze8)||you.isTouching(maze9)||you.isTouching(maze10)){
    you.x=displayWidth/2;
    you.y=displayHeight-100;
  }

  if(you.isTouching(b1)||you.isTouching(b2)||you.isTouching(b3)||you.isTouching(b4)||you.isTouching(b5)||you.isTouching(b6)){
    you.shapeColor()
  }
  


console.log(you.y);
    drawSprites(); 
}
