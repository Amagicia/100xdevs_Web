/*
========================================
Q10. REMOVE DEEPLY NESTED KEY
========================================
Input : { a:{ b:{ c:1, d:2 } } }, remove="c"
Output: { a:{ b:{ d:2 } } }
Approach: Directly delete nested key
JS Used : delete operator, object access
========================================
*/

const data = { a: { b: { c: 1, d: 2 } } };
let remove = "c";

delete data.a.b.c;

console.log(data);
