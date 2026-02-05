/*
========================================
Q15. DEEP MERGE TWO NESTED OBJECTS
========================================
Input : { a:{ x:1, y:2 } }, { a:{ y:3, z:4 } }
Output: { a:{ x:1, y:3, z:4 } }
Approach: Recursively merge nested objects
JS Used : typeof, recursion, Object.keys
========================================
*/
// ! Ai used 
function deepMerge(obj1, obj2) {
    let result = { ...obj1 };

    for (const key in obj2) {
        if (
            typeof obj2[key] === "object" &&
            obj2[key] !== null &&
            typeof obj1[key] === "object"
        ) {
            result[key] = deepMerge(obj1[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

let data1 = { a: { x: 1, y: 2 } };
let data2 = { a: { y: 3, z: 4 } };

console.log(deepMerge(data1, data2));
