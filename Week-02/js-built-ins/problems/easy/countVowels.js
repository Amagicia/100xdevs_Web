/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
    let ans = 0;
    if (str == "") return ans;
    let vowels = ["a", "e", "i", "o", "u"];
    let data = str.toLowerCase().split("");
    // console.log(data);

    vowels.forEach((element) => {
        // console.log(element);
        for (const value of data) {
            if (element == value) {
                ans++;
            }
        }
    });
    return ans;
}
// let elm = "AEIOUaeiou";
// let result = countVowels(elm);
// console.log(result);

module.exports = { countVowels };
