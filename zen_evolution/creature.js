class Creature {
    BirthChance = Number;
    DeathChance = Number;
    Size = Number;
    Speed = Number;
    Location;
    Direction;

    constructor(size, speed, location, direction, ) {
        this.Size = size;
        this.Speed = speed;
        this.Location = location;
        this.Direction = direction;
    }

    live() {
        this.draw();
        this.move();
    }

    move() {
        let speedX = map(noise(this.Direction.x += 0.08), 0, 1, -this.Speed, this.Speed);
        let speedY = map(noise(this.Direction.y += 0.08), 0, 1, -this.Speed, this.Speed);
        let speed = createVector(speedX, speedY);
        this.Location.add(speed);
    }

    draw() {
        circle(this.Location.x, this.Location.y, this.Size);
    }
}