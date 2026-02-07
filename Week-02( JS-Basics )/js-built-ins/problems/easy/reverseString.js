/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

function reverseString(str) {
    if (str == "") return "";
    let ans="";
    let data = str.split("");

    for (let index = data.length - 1; index >= 0; index--) {
        ans = ans + data[index];
    }
    return ans;
}

/* //! ----------------------------- Better Approach ---------------------------- */

// let str = "hello";
// let reversed = str.split("").reverse().join("");
// console.log(reversed); // "olleh"

// let str = "";
// let result = reverseString(str);
// console.log(result);

module.exports = reverseString;
