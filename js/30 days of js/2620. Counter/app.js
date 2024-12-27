/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function(){
        return n++;
    }
};



// const counter = createCounter(10);
// let result = counter();
// result = counter();

// console.log(result);

