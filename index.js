let spirit, enemies; 

function setup() {
    new Canvas(windowWidth, windowHeight);
    spiritsetup();
    enemiessetup();
}

function draw() {
    background(color(85, 194, 96)); 
    noStroke();
    roads();

    spiritMovement();
    enemiesMovement();
    endGame();
}

function endGame() {
    if(spirit.collides(enemies)|| spirit.x > windowWidth){
        spirit.visible = false;
        enemies.remove();
        let endColor = color(52, 52, 235);
        fill(endColor);
        rect(0,0,windowWidth, windowHeight);
        fill(color(5,5,5));
        textSize(30);
        textAlign(CENTER);
        text("Game Over! Reload page to play again", windowWidth/2, windowHeight/2);
        noLoop();
    }
}

function roads() {
    let roadColor = color(89, 87, 83);
    for(let i =50; i < windowWidth; i++) {
        fill(roadColor);
        rect(i, 0, 50, windowHeight);
        i = i + 100;
    }
}

function spiritMovement() {
    if (keyCode == RIGHT_ARROW && keyIsPressed) {
        spirit.x += 1.5;
    }
    else if (keyCode == DOWN_ARROW && keyIsPressed) {
        spirit.y += 1.5;
    }
    else if (keyCode == LEFT_ARROW && keyIsPressed) {
        spirit.x -= 1.5;
    }
    else if (keyCode == UP_ARROW && keyIsPressed) {
        spirit.y -= 1.5;
    }
    else if (key == ' ') {
      spirit.setSpeed(0, 0);
    }
    return false;
  }

function enemiesMovement() {
    enemies.y += 2;
    if(enemies.y > windowHeight) {
        enemies.y = 0;
    }
}

function spiritsetup() {
   spirit = new Sprite(); 
   spirit.diameter = 30;
   spirit.x = 25;
   spirit.y = windowHeight/2;
   spirit.shapeColor = color(121, 242, 232);
   spirit.collider = 'static';
}
function enemiessetup() {
    enemies = new Group(); 
    enemies.diameter = 40;
    enemies.shapeColor = color(250, 2, 2);
    enemies.y = 0;
    while(enemies.length < windowWidth) {
        let enemy = new enemies.Sprite();
        enemy.x = enemies.length * 100 - 25;
    }
 }
