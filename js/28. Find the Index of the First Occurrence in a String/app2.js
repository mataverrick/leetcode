/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let length = needle.length;

    while(i<haystack.length){
        if(haystack.slice(i,i+length)===needle){
            return i;
        }else{
            i++;
        }
    }
    return -1;
};

let resilt = strStr("ississip","issip");
console.log(resilt);

