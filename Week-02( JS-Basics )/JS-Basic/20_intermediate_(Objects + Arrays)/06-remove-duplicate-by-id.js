/*
========================================
Q6. REMOVE DUPLICATE OBJECTS BY ID
========================================
Input : [{ id, name }]
Output: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
Approach: Track seen ids and push unique objects
JS Used : for...of, object access, if
========================================
*/

const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
];

let ans = [];
let obj = {};

for (const key of data) {
    if (!obj[key.id]) {
        obj[key.id] = true; // mark id as seen
        ans.push(key);      // add unique object
    }
}

console.log(ans);

// obj is used to track ids already added to ans
