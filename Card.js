class Card /*extends Sprite*/ {

    constructor(x, y, defaultImg, turnImg) {
        if ((!(defaultImg instanceof p5.Image))) {
            throw new TypeError("defaultImg must be of type p5.Image.");
        }

        if ((!(turnImg instanceof p5.Image))) {
            throw new TypeError("turnImg must be of type p5.Image.");
        }

        this.defaultImg = defaultImg;
        this.turnImg = turnImg;
        this.sprite = new Sprite(this.defaultImg, x, y, 75, 75, KIN);
    }

    flip() {
        (this.sprite.img == this.defaultImg) ? this.sprite.img = this.turnImg : this.sprite.img = this.defaultImg;
    }

    matches(otherCard) {
        if ((!(otherCard instanceof Card))) {
            throw new TypeError("otherCard must be of type Card.");
        }
        return this.sprite.img == otherCard.sprite.img;
    }

}