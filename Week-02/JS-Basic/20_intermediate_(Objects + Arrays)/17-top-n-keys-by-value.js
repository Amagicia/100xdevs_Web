/*
========================================
Q17. FIND TOP N KEYS BY VALUE
========================================
Input : { a:10, b:50, c:30, d:40 }, N=2
Output: ["b","d"]
Approach: Compare values and push top keys
JS Used : Object.entries, Object.values, for...of
========================================
*/

let data = { a: 10, b: 50, c: 30, d: 40 };
let N = 2;
let ans = [];
let max = Object.values(data)[N];

for (const [key, value] of Object.entries(data)) {
    if (value > max) {
        ans.push(key);
    }
}

console.log(ans);
