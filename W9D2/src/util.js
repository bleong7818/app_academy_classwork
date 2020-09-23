// Util.inherits(childClass, parentClass) {

// }

const Util = {
    inherits(parentClass, childClass) {
        function Surrogate() {}
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
};

module.exports = Util;

// ES6 syntax

// const Util = {
//     inherits: function inherits(childClass, parentClass) {
//         //...
//     }
// };

// module.exports = Util;