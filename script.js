var cardBack;
var macNCheese, loadedWaffFries, cheeseDogs, _4CheeseMac, beef_taco, sugarDonuts, nathansMeal, chalupa;
var card1;
var cards = [], imgs;

function preload() {
    cardBack = loadImage("serving-plate-w-lid.jpg");
    macNCheese = loadImage("mac-n-cheese.png");
    loadedWaffFries = loadImage("brew-pub-loaded-waffle-fries.png");
    cheeseDogs = loadImage("cheesy-hot-dogs.png");
    _4CheeseMac = loadImage("4-cheese-mac.png");
    beef_taco = loadImage("taco.png");
    sugarDonuts = loadImage("sugar-donuts.png");
    nathansMeal = loadImage("nathans-combo.png");
    chalupa = loadImage("chalupa.png");
}

function setup() {
    createCanvas(400, 400);
    imgs = [
        [macNCheese, _4CheeseMac, loadedWaffFries, nathansMeal],
        []
    ];
    cards = [[new Card(75, 75, cardBack, macNCheese)]];
    /*card1 = new Card(width / 2 - width / 4, height / 2, cardBack, macNCheese);
    card2 = new Card(width / 2, height / 2, cardBack, loadedWaffFries);
    card3 = new Card(width / 2 + width / 4, height / 2, cardBack, cheeseDogs);*/
}

function draw() {
    background("pink");
    /*if (card1.sprite.mouse.pressed())
        card1.flip();
    if (card2.sprite.mouse.pressed())
        card2.flip();
    if (card3.sprite.mouse.pressed())
        card3.flip();*/
}