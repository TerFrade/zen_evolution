class Ecosystem {
    Age = Number;
    Size = {
        width: Number,
        height: Number
    }
    TotalLife = Number;
    TotalDeath = Number;
    TotalAlive = Number;
    AverageAlive = Number;
    Creatures = [];

    constructor(widthSize = 800, heightSize = 600, totalAlive = 25) {
        this.Age = 0;
        this.Size.width = widthSize;
        this.Size.height = heightSize;
        this.TotalLife = totalAlive;
        this.TotalDeath = 0;
        this.TotalAlive = totalAlive;
        this.AverageAlive = 0;
        this.createAllLife();
    }

    life() {
        for (let i = 0; i < this.TotalAlive; i++) {
            this.borders(this.Creatures[i])
        }
    }

    borders(creature) {
        if (creature.Location.x < -creature.Size) creature.Location.x = width + creature.Size;
        if (creature.Location.y < -creature.Size) creature.Location.y = height + creature.Size;
        if (creature.Location.x > width + creature.Size) creature.Location.x = -creature.Size;
        if (creature.Location.y > height + creature.Size) creature.Location.y = -creature.Size;
        creature.live();
    }

    createAllLife() {
        for (let i = 0; i < this.TotalAlive; i++) {
            this.createLife();
        }
    }

    createLife() {
        let size = random(10, 25);
        let speed = random(3, 5);
        let location = createVector(random(this.Size.width), random(this.Size.height))
        let direction = createVector(random(this.Size.width), random(this.Size.height));
        this.Creatures.push(new Creature(size, speed, location, direction));
    }

}
