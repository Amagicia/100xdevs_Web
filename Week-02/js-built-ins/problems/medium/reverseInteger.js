/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
    if (num === 0) return 0;
    let isnegative = num < 0;
    num = Math.abs(num);
    let ans = 0;

    while (num > 0) {
        let rim = num % 10;
        ans = ans * 10 + rim;
        num = Math.floor(num / 10);
    }
    return isnegative?-ans:ans;
}
// let result = reverseInteger(-123);
// console.log(result);
module.exports = reverseInteger;
