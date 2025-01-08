/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const arr = new Map();
    return function (...args) {
        let key  = JSON.stringify(args);

        if(!arr.has(key)){
            let result =  fn(...args);
            arr.set(key,result);
        }

        return arr.get(key);
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;

    return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3))

console.log(memoizedFn(2,5));// 5
console.log(callCount) // 1 


