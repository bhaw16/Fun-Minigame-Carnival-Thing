var cardBack;
var macNCheese, loadedWaffFries, cheeseDogs, _4CheeseMac, beef_taco, sugarDonuts, nathansMeal, chalupa;
var card1;
var cards = [], imgs;
var arr1 = [], arr2 = [];

function preload() {
    p5.Image.prototype.timesRandomized = 0;
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
        macNCheese, _4CheeseMac, loadedWaffFries, nathansMeal,
        cheeseDogs, beef_taco, sugarDonuts, chalupa
    ];
    cards = [[new Card(75, 75, cardBack, randomizeCardImage()), new Card(175, 75, cardBack, randomizeCardImage()),
                new Card(275, 75, cardBack, randomizeCardImage()), new Card(375, 75, cardBack, randomizeCardImage())],
        [new Card(75, 175, cardBack, randomizeCardImage()), new Card(175, 175, cardBack, randomizeCardImage()),
            new Card(275, 175, cardBack, randomizeCardImage()), new Card(375, 175, cardBack, randomizeCardImage())]/*,
        [new Card(75, 275, cardBack, randomizeCardImage())/*, new Card(175, 275, cardBack, randomizeCardImage()),
            new Card(275, 275, cardBack, randomizeCardImage()), new Card(375, 275, cardBack, randomizeCardImage())],
        [new Card(75, 375, cardBack, randomizeCardImage()), new Card(175, 375, cardBack, randomizeCardImage()),
            new Card(275, 375, cardBack, randomizeCardImage()), new Card(375, 375, cardBack, randomizeCardImage())*/
        //]
];
    /*card1 = new Card(width / 2 - width / 4, height / 2, cardBack, macNCheese);
    card2 = new Card(width / 2, height / 2, cardBack, loadedWaffFries);
    card3 = new Card(width / 2 + width / 4, height / 2, cardBack, cheeseDogs);*/
}

function draw() {
    background("pink");
    /*for (var r = 0; r < cards.length; r++) {
        for (var c = 0; c < cards[0].length; c++) {
          if (cards[r][c].sprite.mouse.pressed())
            cards[r][c].flip(); 
        }
    }*/
    /*if (card1.sprite.mouse.pressed())
        card1.flip();
    if (card2.sprite.mouse.pressed())
        card2.flip();
    if (card3.sprite.mouse.pressed())
        card3.flip();*/
}

function randomizeCardImage() {
    var randomImg = random(imgs);
    console.log(`${imgs[imgs.indexOf(randomImg)].src}: ${imgs[imgs.indexOf(randomImg)].timesRandomized}`);
    imgs[imgs.indexOf(randomImg)].timesRandomized++;
    console.log(`${imgs[imgs.indexOf(randomImg)].src}: ${imgs[imgs.indexOf(randomImg)].timesRandomized}`);
    console.log(randomImg.src);
    if (imgs[imgs.indexOf(randomImg)].timesRandomized > 2) {
        console.log("Randomizing again...");
        randomizeCardImage();
    }
    else {
        console.log("Random card image has been generated.");
        return randomImg;
    }
}