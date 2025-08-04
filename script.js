var cardBack;
var macNCheese
var card1;

function preload() {
    cardBack = loadImage("serving-plate-w-lid.jpg");
    macNCheese = loadImage("mac-n-cheese.png");
}

function setup() {
    cardBack.resize(75, 75);
    macNCheese.resize(75, 75);
    createCanvas(400, 400);
    card1 = new Card(width / 2, height / 2, cardBack, macNCheese);
}

function draw() {
    background("pink");
    if (card1.sprite.mouse.pressed())
        card1.flip();
}