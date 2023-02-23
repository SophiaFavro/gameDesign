let spirit; 

function setup() {
    new Canvas(windowWidth, windowHeight);
    spiritsetup();
}

function draw() {
    background(color(85, 194, 96)); 
    noStroke();

    roads();
    spiritMovement();
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
        spirit.x += 1;
    }
    else if (keyCode == DOWN_ARROW && keyIsPressed) {
        spirit.y += 1;
    }
    else if (keyCode == LEFT_ARROW && keyIsPressed) {
        spirit.x -= 1;
    }
    else if (keyCode == UP_ARROW && keyIsPressed) {
        spirit.y -= 1;
    }
    else if (key == ' ') {
      spirit.setSpeed(0, 0);
    }
    return false;
  }



function spiritsetup() {
   spirit = new Sprite(); 
   spirit.diameter = 40;
   spirit.x = 25;
   spirit.y = windowHeight/2;
   spirit.shapeColor = color(121, 242, 232);
   spirit.collider = 'static';
}
