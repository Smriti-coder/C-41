class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //function start is not an automatic function 
  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1 = createSprite(250, 390);
    car2 = createSprite(450, 390);
    car3 = createSprite(650, 390);
    car4 = createSprite(850, 390);

    car1.addImage(carImg1);
    car2.addImage(carImg2);
    car3.addImage(carImg3);
    car4.addImage(carImg4);
    
    
    
    

    cars = [car1, car2, car3, car4];

   
  }

  play(){
 
    

   form.hide();
   
   text("Let's start bro!", 200,200);
   player.getPlayerInfo();
   //track.addImage(trackImg);
    image(trackImg, 0, displayHeight,displayWidth, displayHeight);
   drawSprites();
  }
}
