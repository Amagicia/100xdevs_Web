/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
    if (str.length === 0) return null;

    let freq = {};
    // * Count the char
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    // * find 1st char have 1 count

    for (const char of str) {
        if (freq[char] == 1) {
            return char;
        }
    }
    return null;
}
// function nonrepeat(str) {
//     if (str === "") return null;
//     let data = str.split("");
//     let unique = {};

//     data.forEach((element) => {
//         if (!unique[element]) {
//             unique[element] = 1;
//         } else {
//             unique[element]++;
//         }
//     });
//     let ans = "";
//     for (const [key, value] of Object.entries(unique)) {
//         if (value <= 1) {
//             ans = key;
//             break;
//         }
//     }
//     let doubled = Object.values(unique);

//     if (!doubled.includes(1)) {
//         return null;
//     }
//     return ans;
// }
// let result = nonrepeat("aabc");
// console.log(result);

module.exports = nonrepeat;
