class Card extends Sprite {

    constructor(x, y, defaultImg, turnImg) {
        if ((!(defaultImg instanceof p5.Image))) {
            throw new TypeError("defaultImg must be of type p5.Image.");
        }

        if ((!(turnImg instanceof p5.Image))) {
            throw new TypeError("turnImg must be of type p5.Image.");
        }


        super(x, y, 75, 75, KIN);
        this.defaultImg = defaultImg;
        this.turnImg = turnImg;
        this.img = this.defaultImg;
    }

    flip() {
        (this.img == this.defaultImg) ? this.img = turnImg : this.img = this.defaultImg;
    }

    matches(otherCard) {
        if ((!(otherCard instanceof Card))) {
            throw new TypeError("otherCard must be of type Card.");
        }
        return this.img == otherCard.img;
    }

}