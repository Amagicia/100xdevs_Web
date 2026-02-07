/*
========================================
Q2. TRANSFORM API RESPONSE (ID → NAME)
========================================
Input : [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
Output: { 1: "Alice", 2: "Bob" }
Approach: Loop array and map id to name
JS Used : for...of, object property access
========================================
*/

const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let ans = {};

for (const key of data) {
  ans[key.id] = key.name;
}

console.log(ans);
