/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
     Once you've implemented the logic, test your code by running
  - "npm run test-count-vowels"
*/

// function countVowels(str) {
//     if(str.length === 0 ) return 0;
//     // let vowels = ["a","e","i","o","u"];
//     // let data = str.toLowerCase().split("");
//     let count = 0;
//     for(let i of str.toLowerCase()){
//       if("aeiou".includes(i)){
//         count++;
//       }
//     };
//     return count;
// }

// ? Better Approach BY SET 
function countVowels(str) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let ch of str.toLowerCase()) {
      if (vowels.has(ch)) {
          count++;
      }
  }
  return count;
}


module.exports = countVowels;