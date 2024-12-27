/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    let filteredArr = arr.filter((value,index)=>{
        return fn(value,index);
    });    
    return filteredArr;
};

// const fn = (n,i)=>{
//     return i === 0;
// }
// const result = filter([0,10,11,3,12],fn)

// console.log(result);