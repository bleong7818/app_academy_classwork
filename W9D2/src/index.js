const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Game = require("./game.js");


window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    let canvasElement = document.getElementById("game-canvas");
    const ctx = canvasElement.getContext("2d");
    
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
    window.Game = Game;
    
    window.testAsteroid = new Asteroid([100,100]);
    window.testGame = new Game();
    window.ctx = ctx;
    
});