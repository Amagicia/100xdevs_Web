/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string.
   The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions.
    If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/


// ? Approach - cheack if the char and +1 char are same the ++ count , until the next char are diffrent,
// ? when diffrent then add that repeated char to ans and cheack if count is >=2 then add count to ans and reset the count to 1;

function compression(str) {
    if (str.length === 0) return "";
    let ans = "";
    let count = 1;

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            ans += str[i];
            if (count >= 2) {
                ans += count;
            }
            count = 1;
        }
    }

    return ans;
}
// function compression(str) {
//     if (str.length === 0) return "";
//     let ans = "";
//     let data = {}; // freq

//     for (const char of str) {
//         // console.log(char);
//         data[char]=(data[char] || 0) + 1;
//     }
//     // console.log(data);
//     // * contraction str
//     for (const [key,value] of Object.entries(data)) {
//       if(value>=2){
//         ans=ans+key+value;
//       }else{
//         ans=ans+key
//       }
//     }
// return ans;
// }
// let result = compression("abc");
// console.log(result);

module.exports = compression;
