/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const matchBrackets = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for (let i = 0; i < s.length; i++) {

        if(s[i] === '(' || s[i] === '[' || s[i] == '{'){
            stack.push(s[i]);
        }else if(s[i] === ')' || s[i] === ']' || s[i] == '}'){

            if(stack.length === 0 || stack.pop() != matchBrackets[s[i]]){
                return false;
            }
        }
    }

    return stack.length === 0;
};


const fn = isValid;
console.log(fn('([][]'));