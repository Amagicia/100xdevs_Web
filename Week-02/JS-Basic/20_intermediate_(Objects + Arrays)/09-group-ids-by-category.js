/*
========================================
Q9. BUILD INDEX OF IDS BY CATEGORY
========================================
Input : [{ id, category }]
Output: { fruit:[1,3], veggie:[2] }
Approach: Group ids into arrays by category
JS Used : for...of, object access, Array.push
========================================
*/

const data = [
    { id: 1, category: "fruit" },
    { id: 2, category: "veggie" },
    { id: 22, category: "veggie" },
    { id: 23, category: "veggie" },
    { id: 25, category: "veggie" },
    { id: 62, category: "veggie" },
    { id: 3, category: "fruit" },
];

let ans = {};

for (const key of data) {
    if (!ans[key.category]) {
        ans[key.category] = [key.id];
    } else {
        ans[key.category].push(key.id);
    }
}

console.log(ans);
