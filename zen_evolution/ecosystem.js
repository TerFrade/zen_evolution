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
    DeathChance = Number;
    Creatures = [];

    constructor(age = 0, widthSize = 800, heightSize = 600, totalLife = 2, totalDeath = 0, totalAlive = 2, deathChance = 0.5) {
        this.Age = age;
        this.Size.width = widthSize;
        this.Size.height = heightSize;
        this.TotalLife = totalLife;
        this.TotalDeath = totalDeath;
        this.TotalAlive = totalAlive;
        this.AverageAlive = 0;
        this.DeathChance = deathChance;
        this.createAllLife();
    }
    Life() {
        if (frameCount == 200) {
            this.Age++;
            if (random() * 100 < 20)
                this.createLife();
            frameCount = 0;
        }

        this.Creatures.forEach(creature => {
            creature.live();
        });
    }

    createLife() {
        let x = random(50, this.Size.width - 50);
        let y = random(50, this.Size.height - 50);
        this.Creatures.push(new Creature(undefined, undefined, undefined, undefined, x, y))
    }

    createAllLife() {
        for (let i = 0; i < this.TotalAlive; i++) {
            this.createLife();
        }
    }
}
