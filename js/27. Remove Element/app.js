/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let numsRepeat = 0
    let long = nums.length;

    // nums.forEach((element)=>{
    //     if(element==val){
    //         console.log("hola");
    //     }
    // })

    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice([i],1);
            numsRepeat ++;
        }else{
            i++;
        }
    }

    console.log(nums);

    return long - numsRepeat;
};

let result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// console.log(result);

//this is my firstSolution