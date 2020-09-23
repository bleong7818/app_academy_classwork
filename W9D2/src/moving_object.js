function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}


MovingObject.prototype.draw = function(ctx) {
    // ctx
    // debugger
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
        // default direction of drawing circle is clockwise
        // default is false = clockwise unless specified
        );

        ctx.fill();
};


// ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);

MovingObject.prototype.move = function() {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
};

// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

    // let x1 = this.pos[0];
    // let x2 = coord.pos[0];
    // let y1 = this.pos[1];
    // let y2 = coord.pos[1];

    // let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    // let time = distance / this.vel;

    // //coord (50,50)
    // function setInterval((time) => {
        
    // }, time);

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

// console.log(mo);


module.exports = MovingObject;