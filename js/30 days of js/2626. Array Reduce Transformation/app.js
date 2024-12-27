/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let sum = init;

    nums.forEach(element => {
        sum = fn(sum,element);
    });

    return sum;
};

const fn = function sum(accum, curr) { return accum + curr * curr; }
const result = reduce([1,2,3,4],fn,100)
console.log(result);