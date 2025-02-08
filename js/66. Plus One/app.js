/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let newDigits = 1 + ((Number) (digits.join('')));

    newDigits = String (newDigits).split('');

    digits = [];
    
    newDigits.forEach(element => {
        digits.push(Number (element));
    });

    return digits;
};

const fn = plusOne([1, 2, 3]);
console.log(fn)