/*
========================================
Q13. MOST REPEATED WORD ACROSS CATEGORIES
========================================
Input : { fruits:[...], drinks:[...] }
Output: apple
Approach: Count frequency, then find max
JS Used : Object.values, Object.entries, for...of
========================================
*/

let data = { fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] };
let tracker = {};

// count frequency
for (const arr of Object.values(data)) {
    for (const word of arr) {
        tracker[word] = (tracker[word] || 0) + 1;
    }
}

// find max
let maxCount = 0;
let mostRepeated = null;

for (const [word, count] of Object.entries(tracker)) {
    if (count > maxCount) {
        maxCount = count;
        mostRepeated = word;
    }
}

console.log(mostRepeated);
