/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const char = nums[i];
        let j = i + 1;

        if (char === target) {
            return i;
        } else {
            if (target < char) {
                return i;
            }

            if (target > char && target < nums[j]) {
                return j;
            }
        }


    }
};


const fn = searchInsert([0, 2,3,3,5], 4);
console.log(fn);
