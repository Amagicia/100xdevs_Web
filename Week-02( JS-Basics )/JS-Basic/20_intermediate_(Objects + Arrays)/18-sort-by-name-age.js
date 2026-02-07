/*
========================================
Q18. SORT ARRAY OF OBJECTS BY NAME THEN AGE
========================================
Input : [{ name, age }]
Output: [{ Alice(22) }, { Alice(30) }, { Bob(25) }]
Approach: Sort by name first, then age if names match
JS Used : Array.sort, localeCompare
========================================
*/

let data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];

// sort() modifies the original array and returns it
let ans = data.sort((a, b) => {
  if (a.name === b.name) {
      return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});

console.log(ans);
