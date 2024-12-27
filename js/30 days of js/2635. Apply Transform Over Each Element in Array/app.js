/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = arr.map((value,index)=>{
        return fn(value,index)
    });

    return newArray;
};




// let fn = function (val,i){
//     return val + i ;
// }

// const result  = map([1,2,3,4],fn);
// console.log(result);
// console.log(typeof result);