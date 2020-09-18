Array.prototype.uniq = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i++){
        if (!newArr.includes(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr;
}

console.log([1,2,2,2,3]).uniq

Array.prototype.twoSum = function() {
    let newArr = [];

    for (let i = 0; i < this.length - 1; i++) {
        // debugger
        if ((this[i] + this[i + 1]) === 0) {
            newArr.push([i, i + 1]);
        };
    };
    return newArr;
}



Array.prototype.transpose = function() {
    let transposed = [];
    // []

    // this = [[2,5],[6,7]]

    for (let i = 0; i < this.length; i++) {
        transposed.push([]);
    };

    // [ [], [], ]

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            transposed[j].push(this[i][j]);
        };
    };
    return transposed;
}


Array.prototype.myEach = function(cb) {

    for( i = 0; i < this.length - 1; i++) {
        console.log(cb(this[i]));
    };
    
}

let doubler = function(n) {
    return 2 * n;
}