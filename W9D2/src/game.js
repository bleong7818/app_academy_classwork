// holds collections of asteroids, bullets, ship

const Asteroid = require("./asteroid.js")   

function Game() {
    this.dim_x = Game.DIM_X;
    this.dim_y = Game.DIM_Y;
    this.num_asteroids = Game.NUM_ASTEROIDS;
    this.asteroids = []; 
    this.addAsteroids
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 5;

Game.prototype.addAsteroids = function () {
    for(let i = 0; i < this.num_asteroids; i++){
        let newAsteroid = new Asteroid(Game.randomPosition);
        debugger
        this.asteroids.push(newAsteroid);
    }
};


Game.prototype.randomPosition = function () {
    // let that = this;
    function randomNumber(dim) {
        return Math.floor(Math.random() * dim);
    };
    // return randomNumber();
    // let randX = Math.floor(Math.random() * this.dim_x);
    // let randY = Math.floor(Math.random() * this.dim_x);

    return [randomNumber(this.dim_x),randomNumber(this.dim_y)];
     
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y)

    this.asteroids.forEach(function (asteroid) {
        asteroid.draw(ctx);
    });
};


Game.prototype.moveObject = function () {
    this.asteroids.forEach(function (asteroid) {
        asteroid.move(ctx);
    });
};



Game.prototype.step = function () {

};




Game.prototype.checkCollisions = function () {

};


// const testGame = new Game();
// console.log(testGame)

module.exports = Game;