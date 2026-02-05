/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/

//  ?Good Approach - return arr.filter((ele, index) => arr.indexOf(ele) !== index);

// ! Problem with Solution is , cant handle duplicate value in array [1,1,1,2] ans =>[1,1]
// function findDuplicates(arr) {
//     if (arr.length === 0) return [];

//     let ele = {};
//     let ans = [];
//     arr.forEach((element) => {
//         if (!ele[element]) {
//             ele[element] = element;
//         } else {
//             ans.push(element);
//         }
//     });
//     return ans;
// }

// ? Set approach - make 2 Set 1 that seen value, 1 containing duplicate value so [1,1,1]=>[1,1] NOt happens

function findDuplicates(arr) {
    // return arr.filter((ele, index) => arr.indexOf(ele) !== index);
    if (arr.length === 0) return [];

    let seen = new Set();
    let duplicate = new Set();

    arr.forEach((element) => {
        if (seen.has(element)) {
            duplicate.add(element);
        } else {
            seen.add(element);
        }
    });
    return [...duplicate];
}
// let str = [1, 1, 1, 2];
// let result = findDuplicates(str);
// console.log(result);

module.exports = findDuplicates;
