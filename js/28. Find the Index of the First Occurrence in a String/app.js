/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;
    const haystackLong = haystack.length;
    const needleLong = needle.length;


    for (let index = 0; index < haystackLong; index++) {
        if(haystack[index]===needle[0]){
            j = index;
            while(i<needleLong){
                if(haystack[j]!=needle[i]){
                    break;
                }else{
                    j++;
                    i++;
                }
                
            }  
        }
        
        if(i === needleLong){
            return index;
        }
        i=0;
    }

    return -1;
    
};

let resilt = strStr("ississip","issip");
console.log(resilt);