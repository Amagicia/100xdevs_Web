/**
 * 5. **Transform array of orders into revenue per category**
    - Input:
        
        ```jsx
        [
          { id: 1, category: "electronics", price: 100 },
          { id: 2, category: "clothes", price: 50 },
          { id: 3, category: "electronics", price: 200 }
        ]
        
        ```
        
    - Output:
        
        ```jsx
        { electronics: 300, clothes: 50 }
        ```
 */

const data = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 },
];
let ans = {};

for (const key of data) {
    // console.log(key);
    if (!ans[key.category]) {
        ans[key.category] = key.price;
    } else {
        ans[key.category] = ans[key.category] + key.price;
    }
}
console.log(ans);
