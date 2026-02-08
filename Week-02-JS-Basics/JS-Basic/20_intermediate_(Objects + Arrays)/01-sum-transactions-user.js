/*
========================================
Q1. SUM ALL TRANSACTIONS PER USER
========================================
Input : [{ user: "A", amount: 100 }, { user: "B", amount: 200 }, { user: "A", amount: 50 }]
Output: { A: 150, B: 200 }
Approach: Loop array and accumulate amount per user
JS Used : for...of, object property access, if / else
========================================
*/

const data = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 },
];

let ans = {};

for (const key of data) {
    if (ans[key.user]) {
        ans[key.user] = key.amount + ans[key.user];
    } else {
        ans[key.user] = key.amount;
    }
}

console.log(ans);
