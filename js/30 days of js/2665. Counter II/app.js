/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const initialValue = init;
    return {
        increment: function () {
            return init+=1;
        },
        reset: function () {
            init = initialValue;
            return initialValue
        },decrement: function(){
            return init -=1;
        }
    }
};


// const counter = createCounter(5)
// pr(counter.increment());
// pr(counter.reset());
// pr(counter.decrement());


// function pr(fn){
//     console.log(fn);
// }