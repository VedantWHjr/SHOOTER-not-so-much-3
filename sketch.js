const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var engine, world;
//var box1, pig1,pig3;
var backgroundImg,platform;
var player;
var ground;
var enemy;
var x = 0;
var y = 380;
var Enemies =[];
//var bird, slingshot;

//var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {

}

function setup(){
    var canvas = createCanvas(displayWidth-200, displayHeight-200);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    player = new Player(displayWidth/2,displayHeight/2);
    enemy = new Enemy(x,380,20,20);
    console.log(player.body);
    //player.createPlayer();
    //player = createSprite(displayWidth/2, displayHeight/2,20,20);
    //box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    /*log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});*/
}

function draw(){
        background("red");
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
   Engine.update(engine);
   ground.display();
   player.display();
   spawn();
    for(var i = 0; i<Enemies.length;i++){

           Enemies[i].display(); 
    }

    /*strokeWeight(4);
    box1.display();
    box2.display();
    
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();*/
    //drawSprites();
    


    
}

/*function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
}*/
function keyPressed(){
    console.log("keyispressed");
    if(keyCode === 38){
        console.log("up arrow");
        //player.body.velocity.y = -4;
        Matter.Body.setVelocity(player.body, {x:0, y:-10});
        
    }
    if(keyCode === 40){
      
        Matter.Body.setVelocity(player.body, {x:0, y:10});
    }
    if(keyCode === 39){
        
        Matter.Body.setVelocity(player.body, {x:10, y:0});
    }
    if(keyCode === 37){
        
        Matter.Body.setVelocity(player.body, {x:-10, y:0});
    }
    
}

function spawn(){
    
    if(frameCount%80 === 0){
        var rand = Math.round(random(0,1));
        switch(rand){
            case 0: x = 0;
            break
            case 1:x=400;
            break;   

        }
        var r = Math.round(random(20,30));
        enemy = new Enemy(x,380,r);
        Enemies.push(enemy);
        



    }
}
