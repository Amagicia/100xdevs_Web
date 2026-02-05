/*
========================================
Q11. CHECK IF TWO OBJECTS ARE DEEPLY EQUAL
========================================
Input : { a:{ x:1, y:2 } }, { a:{ x:1, y:2 } }
Output: true
Approach: Recursively compare keys and values
JS Used : typeof, Object.keys, recursion
========================================
*/
// ! Ai used
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
        typeof obj1 !== "object" || obj1 === null ||
        typeof obj2 !== "object" || obj2 === null
    ) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

let data = { a: { x: 1, y: 2 } };
let dataA = { a: { x: 1, y: 2 } };

console.log(deepEqual(data, dataA));
