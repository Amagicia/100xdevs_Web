/*
========================================
Q3. REMOVE FALSY VALUES FROM OBJECT
========================================
Input : { a: 0, b: null, c: "hello", d: undefined, e: 5 }
Output: { c: "hello", e: 5 }
Approach: Loop object entries and keep only valid values
JS Used : Object.entries, for...of, if
========================================
*/

const data = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
let ans = {};

for (const [key, values] of Object.entries(data)) {
    if (values !== null && values !== undefined && values != 0) {
        ans[key] = values;
    }
}

console.log(ans);
