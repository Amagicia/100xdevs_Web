/*
========================================
Q7. CHUNK OBJECT ENTRIES BY SIZE
========================================
Input : { a:1, b:2, c:3, d:4 }, size=2
Output: [ [["a",1],["b",2]], [["c",3],["d",4]] ]
Approach: Convert object to entries, then chunk array
JS Used : Object.entries, for loop, Array.push, slice
========================================
*/

const data = { a: 1, b: 2, c: 3, d: 4 };
let size = 2;

let ans = [];
let entries = Object.entries(data); // [["a",1], ["b",2], ["c",3], ["d",4]]

for (let i = 0; i < entries.length; i += size) {
    ans.push(entries.slice(i, i + size));
}

console.log(ans);
