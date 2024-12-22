

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let beforeValue = 0;
    let afterValue = 1;

    while(afterValue<nums.length){
        if(nums[beforeValue]!==nums[afterValue]){
            beforeValue++;
            nums[beforeValue] = nums [afterValue];
        }
        afterValue ++;
    }
    
    return beforeValue + 1;
};

removeDuplicates([1,1,2])