/*
========================================
Q5. REVENUE PER CATEGORY
========================================
Input : [{ id, category, price }]
Output: { electronics: 300, clothes: 50 }
Approach: Loop orders and sum price by category
JS Used : for...of, object property access, if / else
========================================
*/

const data = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 },
];

let ans = {};

for (const key of data) {
    if (!ans[key.category]) {
        ans[key.category] = key.price;
    } else {
        ans[key.category] = ans[key.category] + key.price;
    }
}

console.log(ans);
