/*
========================================
Q16. NESTED OBJECT DESTRUCTURING
========================================
Input : { user:{ profile:{ name, age } } }
Output: Alice 25
Approach: Destructure nested properties
JS Used : Object destructuring
========================================
*/

let data = { user: { profile: { name: "Alice", age: 25 } } };

const {
    user: {
        profile: { name, age },
    },
} = data;

console.log(name, age);
