/*
3. **Remove falsy values from object**
    - Input:
        
        ```jsx
        { a: 0, b: null, c: "hello", d: undefined, e: 5 }
        
        ```
        
    - Output:
        
        ```jsx
        { c: "hello", e: 5 }
        ```
         */

const data = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
let ans = {};

for (const [key, values] of Object.entries(data)) {
    console.log(key, values);
    if (values !== null && values !== undefined && values != 0) {
        ans[key] = values;
    }
}
console.log(ans);
