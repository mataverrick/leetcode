/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length<1){
        return init;
    }

    let i = 1;
    let j = 0;
    nums[j]=fn(init,nums[j])

    while(i<nums.length){
        nums[i] = fn(nums[j],nums[i]);
        i++;
        j++;
    }

    return nums[nums.length-1];
};

const fn = function sum(accum, curr) { return accum + curr * curr; }
const result = reduce([1,2,3,4],fn,100)
console.log(result);