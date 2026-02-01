/* -------------------------------------------------------------------------- */
/*                               40 JS Questions                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     Q-1                                    */
/* -------------------------------------------------------------------------- */

/* 
! Problem : Sum values in object arrays
    *   Input :    { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
    *  Output:    { food: 60, travel: 20, bills: 100 } */

// let data =  { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// let foodsum=0,travelsum=0,billssum=0;
// data.food.forEach(element => {
//     foodsum=foodsum+element;
// });
// data.travel.forEach(element => {
//     travelsum=travelsum+element;
// });
// data.bills.forEach(element => {
//     billssum=billssum+element;
// });
// let ans = {}
// ans.food=foodsum;
// ans.travel=travelsum;
// ans.bills=billssum;
// console.log(ans);

/* -------------------------------------------------------------------------- */
/*                                   Q - 02                                   */
/* -------------------------------------------------------------------------- */
/*
  !  Problem 2. Count word occurrences in array
    *    - Input:["apple", "banana", "apple", "orange", "banana", "apple"]
    *   - Output: { apple: 3, banana: 2, orange: 1 }
*/

// let data = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let ans = {};
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//     if (ans[data[i]]) {
//         ans[data[i]]++;
//     } else {
//         ans[data[i]] = 1;
//     }
// }
// console.log(ans);

/* -------------------------------------------------------------------------- */
/*                                   Q - 03                                  */
/* -------------------------------------------------------------------------- */
/*
  !  Problem 3. Swap keys and values of object
    *    - Input: { a: "x", b: "y", c: "z" }
    *   - Output:  { x: "a", y: "b", z: "c" }
*/

/*
let data = { a: "x", b: "y", c: "z" }
console.log("Data",data);

let ans = {}

// ** Both are same 
// console.log(data.a);
// console.log(data["a"]);
for (let i in data) {
    // ans[data[i]] = data[i];
    // console.log(i);
    // ! Here i is key of object

    // ** [] and . can access object data  if it i variable use [] , when static then . 
    // console.log(data.i); // undefined
    // console.log(data[i]);
    ans[data[i]]=i;
     
}
console.log("ans",ans);
*/

/* -------------------------------------------------------------------------- */
/*                                   Q - 04                                  */
/* -------------------------------------------------------------------------- */
/*
  !  Problem 3. Find the largest value key
    *    - Input:{ a: 10, b: 50, c: 20 }
    *   - Output:  b
*/

// *TODO Approach - Traverse the value and compare the max value every time .
// ** Hint Object.keys(data) give array of keys of Object

/*
let data = { a: 10, b: 50, c: 20 }
let maxkey= Object.keys(data)[0];
// console.log(Object.keys(data));


for (const key in data) {
   if(data[key]>data[maxkey]){
    maxkey=key
   }
}
console.log(maxkey);
*/

/* -------------------------------------------------------------------------- */
/*                                   Q - 05                                   */
/* -------------------------------------------------------------------------- */
/*
  !  Problem 5. Flatten object of arrays into one array
    *    - Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
    *   - Output:["apple", "banana", "carrot", "pea"]
*/

// ** Approach - push values to an array by Traverse every value
/*
let data = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
let ans = [];

for(let key in data){
    // console.log(data[key][0]);
    ans.push(data[key][0]);
    ans.push(data[key][1]);
    
}
console.log(ans);
*/

/* -------------------------------------------------------------------------- */
/*                                   Q - 06                                   */
/* -------------------------------------------------------------------------- */
/*
  !  Problem 6. Group people by city
    *    - Input:     [
          { name: "A", city: "Delhi" },
          { name: "B", city: "Mumbai" },
          { name: "C", city: "Delhi" }
        ]
    *   - Output:{ Delhi: ["A", "C"], Mumbai: ["B"] }
*/

// ** Approach - let do something
// let data = [
//     { name: "A", city: "Delhi" },
//     { name: "B", city: "Mumbai" },
//     { name: "C", city: "Delhi" },
// ];
// let ans = {};

// for (let i in data) {
//     console.log(i);
//     let city = data[i].city;
//     let name = data[i].name;
//     if (ans[city]) {
//         ans[city].push(name);
//     } else {
//         ans[city] = [name];
//     }
// }
// console.log(ans);
// console.log(Object.values(ans));

