/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const newArray = []
    for (let index = 0; index < n; index++) {
        let val = index + 1
        if(val % 15 == 0){
            newArray.push("FizzBuzz")
        }else if(val % 3 == 0){
            newArray.push("Fizz")
        }else if(val % 5 == 0){
            newArray.push("Buzz")
        }else{
            newArray.push(String(val))
        }
    }

    return newArray 
};


const result  = fizzBuzz(15)
console.log(result)