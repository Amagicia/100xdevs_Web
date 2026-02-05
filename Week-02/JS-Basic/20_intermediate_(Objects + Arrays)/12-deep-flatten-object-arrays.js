/*
========================================
Q12. DEEP FLATTEN NESTED ARRAYS IN OBJECT
========================================
Input : { a:[1,[2,[3]]], b:[4,[5]] }
Output: { a:[1,2,3], b:[4,5] }
Approach: Flatten arrays using flat(Infinity)
JS Used : Object.entries, Array.flat
========================================
*/

let data = { a: [1, [2, [3]]], b: [4, [5]] };

for (const [key, values] of Object.entries(data)) {
    data[key] = values.flat(Infinity);
}

console.log(data);
