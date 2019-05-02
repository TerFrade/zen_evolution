class Creature {
    BirthChance = Number;
    DeathChance = Number;
    Speed = {
        x: Number,
        y: Number
    }
    Location = {
        x: Number,
        y: Number
    }
    Size = Number;

    constructor(birthChance = 100, deathChance = 10, speedX = 3, speedY = 3, posX = 25, posY = 25, size = 30) {
        this.BirthChance = birthChance;
        this.DeathChance = deathChance;
        this.Speed.x = speedX;
        this.Speed.y = speedY;
        this.Location.x = posX;
        this.Location.y = posY;
        this.Size = size;
    }

    live() {
        this.draw();
        this.move();
    }

    move() {
        if (this.Location.x >= width - this.Size / 2 || this.Location.x <= 0 + this.Size / 2)
            this.Speed.x = -this.Speed.x;

        if (this.Location.y >= height - this.Size / 2 || this.Location.y <= 0 + this.Size / 2)
            this.Speed.y = -this.Speed.y;

        this.Location.x += this.Speed.x;
        this.Location.y += this.Speed.y;
    }

    draw() {
        circle(this.Location.x, this.Location.y, this.Size);
    }
}