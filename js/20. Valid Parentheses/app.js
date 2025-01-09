/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const brackets = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for(let i = 0;i<s.length;i++){
        const char = s[i];

        if(char === '(' || char ==='[' || char === '{'){
            stack.push(char);
        }else if(char === ')' || char === ']' || char ==='}'){
            if(stack.length === 0 || brackets[char] != stack.pop()){
                return false;
            }
        }
        
    }


    return stack.length === 0;
};


const fn = isValid;
console.log(fn('([][])'));