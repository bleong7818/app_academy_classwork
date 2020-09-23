/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\n\nfunction Asteroid(pos) {\n\n    MovingObject.call(this, Asteroid.COLOR, Asteroid.RADIUS);\n    this.color = Asteroid.COLOR;\n    this.radius = Asteroid.RADIUS;\n    this.pos = pos;\n    this.vel = Util.randomVec(this.radius * 2)\n};\n\nAsteroid.COLOR = \"#999999\"\nAsteroid.RADIUS = 20\n\n// @@COLOR = \n// Ruby ^\n\nUtil.inherits(MovingObject, Asteroid)\n\nconst testAsteroid = new Asteroid([100, 100]);\nconsole.log(testAsteroid);\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// holds collections of asteroids, bullets, ship\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")   \n\nfunction Game() {\n    this.dim_x = Game.DIM_X;\n    this.dim_y = Game.DIM_Y;\n    this.num_asteroids = Game.NUM_ASTEROIDS;\n    this.asteroids = []; \n    this.addAsteroids\n}\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.addAsteroids = function () {\n    for(let i = 0; i < this.num_asteroids; i++){\n        let newAsteroid = new Asteroid(Game.randomPosition);\n        debugger\n        this.asteroids.push(newAsteroid);\n    }\n};\n\n\nGame.prototype.randomPosition = function () {\n    // let that = this;\n    function randomNumber(dim) {\n        return Math.floor(Math.random() * dim);\n    };\n    // return randomNumber();\n    // let randX = Math.floor(Math.random() * this.dim_x);\n    // let randY = Math.floor(Math.random() * this.dim_x);\n\n    return [randomNumber(this.dim_x),randomNumber(this.dim_y)];\n     \n};\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, this.dim_x, this.dim_y)\n\n    this.asteroids.forEach(function (asteroid) {\n        asteroid.draw(ctx);\n    });\n};\n\n\nGame.prototype.moveObject = function () {\n    this.asteroids.forEach(function (asteroid) {\n        asteroid.move(ctx);\n    });\n};\n\n\n\nGame.prototype.step = function () {\n\n};\n\n\n\n\nGame.prototype.checkCollisions = function () {\n\n};\n\n\n// const testGame = new Game();\n// console.log(testGame)\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    // console.log('DOM fully loaded and parsed');\n    let canvasElement = document.getElementById(\"game-canvas\");\n    const ctx = canvasElement.getContext(\"2d\");\n    \n    window.MovingObject = MovingObject;\n    window.Asteroid = Asteroid;\n    window.Game = Game;\n    \n    window.testAsteroid = new Asteroid([100,100]);\n    window.testGame = new Game();\n    window.ctx = ctx;\n    \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\n\nMovingObject.prototype.draw = function(ctx) {\n    // ctx\n    // debugger\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n        // default direction of drawing circle is clockwise\n        // default is false = clockwise unless specified\n        );\n\n        ctx.fill();\n};\n\n\n// ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);\n\nMovingObject.prototype.move = function() {\n    this.pos[0] = this.pos[0] + this.vel[0];\n    this.pos[1] = this.pos[1] + this.vel[1];\n};\n\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n    // let x1 = this.pos[0];\n    // let x2 = coord.pos[0];\n    // let y1 = this.pos[1];\n    // let y2 = coord.pos[1];\n\n    // let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\n    // let time = distance / this.vel;\n\n    // //coord (50,50)\n    // function setInterval((time) => {\n        \n    // }, time);\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// console.log(mo);\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Util.inherits(childClass, parentClass) {\n\n// }\n\nconst Util = {\n    inherits(parentClass, childClass) {\n        function Surrogate() {}\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n// ES6 syntax\n\n// const Util = {\n//     inherits: function inherits(childClass, parentClass) {\n//         //...\n//     }\n// };\n\n// module.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });