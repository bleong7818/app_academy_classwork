const Util = require("./util.js")
const MovingObject = require("./moving_object.js")


function Asteroid(pos) {

    MovingObject.call(this, Asteroid.COLOR, Asteroid.RADIUS);
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
    this.pos = pos;
    this.vel = Util.randomVec(this.radius * 2)
};

Asteroid.COLOR = "#999999"
Asteroid.RADIUS = 20

// @@COLOR = 
// Ruby ^

Util.inherits(MovingObject, Asteroid)

const testAsteroid = new Asteroid([100, 100]);
console.log(testAsteroid);

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

module.exports = Asteroid;