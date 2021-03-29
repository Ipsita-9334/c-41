var playerCount, gameState = 0, allPlayers;
var game, form, player;
var database;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, trackImg;
var finishedPlayers = 0, passedFinishPoint;
var bronzeImg, silverImg, goldImg;

function preload(){
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");
    bronzeImg = loadImage("images/bronze.png");
    silverImg = loadImage("images/silver.png");
    goldImg = loadImage("images/gold.png");
}


function setup(){
    createCanvas(displayWidth - 30, displayHeight - 110);
    database = firebase.database();
   
    game = new Game();
    game.getState();
    game.start();

    

}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   
   if(gameState === 1){
       clear();
       game.play();
   }

   if(gameState === 2){
       game.displayRank();
   }

   if(finishedPlayers === 4){
       gameState = 2;
   }
}

