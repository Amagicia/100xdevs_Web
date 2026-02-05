/*
========================================
Q20. MERGE TWO OBJECTS (OVERRIDE SECOND)
========================================
Input : { a:10, b:20 }, { a:5, c:15 }
Output: { a:5, b:20, c:15 }
Approach: Merge using spread operator
JS Used : Object spread (...)
========================================
*/

let data1 = { a: 10, b: 20 };
let data2 = { a: 5, c: 15 };

let ans = {};

console.log({ ...data1, ...data2 });
