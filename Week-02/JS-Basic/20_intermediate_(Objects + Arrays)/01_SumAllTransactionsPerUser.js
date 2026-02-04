/* 
1. **Sum all transactions per user**
    - Input:
        
        ```jsx
        [
          { user: "A", amount: 100 },
          { user: "B", amount: 200 },
          { user: "A", amount: 50 }
        ]
        ```
        
    - Output:
        
        ```jsx
        { A: 150, B: 200 }
        ```
*/
const data = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 },
];
let ans = {};

for (const key of data) {
    // console.log(key);

    if (ans[key.user]) {
        ans[key.user] = key.amount + ans[key.user];
    } else {
        ans[key.user] = key.amount;
    }
}
console.log(ans);
