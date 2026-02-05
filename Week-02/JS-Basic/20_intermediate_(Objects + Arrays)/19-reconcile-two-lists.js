/*
========================================
Q19. RECONCILE TWO LISTS (MISSING & EXTRA)
========================================
Input : expected=["a","b","c"], actual=["b","c","d"]
Output: { missing:["a"], extra:["d"] }
Approach: Compare both arrays and track differences
JS Used : for...of, Array.includes
========================================
*/

let expected = ["a", "b", "c"];
let actual = ["b", "c", "d"];

let ans = { missing: [], extra: [] };

for (const exp of expected) {
    if (!actual.includes(exp)) {
        ans.missing.push(exp);
    }
}

for (const act of actual) {
    if (!expected.includes(act)) {
        ans.extra.push(act);
    }
}

console.log(ans);

