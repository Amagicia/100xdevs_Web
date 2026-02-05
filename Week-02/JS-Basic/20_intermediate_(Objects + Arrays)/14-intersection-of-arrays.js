/*
========================================
Q14. INTERSECTION OF ALL ARRAYS IN OBJECT
========================================
Input : { a:[1,2,3], b:[2,3,4], c:[3,4,5] }
Output: [3]
Approach: Check presence in all arrays
JS Used : for...of, Array.includes
========================================
*/

let data = { a: [1,2,3], b: [2,3,4], c: [3,4,5] };
let ans = [];
let temp = data.a;

for (const value of temp) {
    if (data.b.includes(value) && data.c.includes(value)) {
        ans.push(value);
    }
}

console.log(ans);
