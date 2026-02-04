/*
2. **Transform API response to object (id → name)**
    - Input:
        
        ```jsx
        [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" }
        ]
        ```
        
    - Output:
        
        ```jsx
        { 1: "Alice", 2: "Bob" }
        ```
         */

const data =  [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]
let ans = {};

for (const key of data) {
    // console.log(key);
    ans[key.id]=key.name;

}
console.log(ans);
