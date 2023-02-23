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
    spirit.speed -= 0.1;
    if (kb.pressing('left')) {
        spirit.vel.x -= 0.2;
    }
    else if (kb.pressing('right')) {
        spirit.vel.x += 0.2;
    }
    else if(kb.pressing('up')) {
        spirit.vel.y -= 0.2;
    }
    else if(kb.pressing('down')) {
        spirit.vel.y += 0.2;
    }
    else {
        spirit.vel = 0;
    }
}

function spiritsetup() {
    spirit = new Sprite(25, windowHeight/2, 40, 'static');
    //spirit.diameter = 50;
    //spirit.x = 150;
    //spirit.y = 50;
    //spirit.collider = 'static';
}
