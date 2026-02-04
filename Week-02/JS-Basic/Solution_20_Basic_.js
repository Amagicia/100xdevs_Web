/* -------------------------------------------------------------------------- */
/*          JAVASCRIPT ASSIGNMENT DOCUMENTATION 20 Questions                  */
/* -------------------------------------------------------------------------- */

/*  ╔════════════════════════════════════════════════════════════════════╗
    ║        🔥 JAVASCRIPT BUILT-IN FUNCTIONS CHEAT SHEET 🔥            ║
    ║       (Everything used in this assignment explained simply)        ║
    ╚════════════════════════════════════════════════════════════════════╝
*/

/* ==================================================================
   📦 1. ARRAY METHODS (Managing Lists)
   ================================================================== */

/**
 * 🔄 .forEach(callback)
 * ---------------------
 * THE LOOPER: Runs a function for every single item in the array.
 * Use this when you want to DO something with data, not return a new array.
 */
// [1, 2].forEach(num => console.log(num)); // Prints 1, then 2

/**
 * ➕ .push(item)
 * ---------------------
 * THE ADDER: Shoves a new item onto the end of the array.
 */
// let arr = ["A"];
// arr.push("B"); // arr is now ["A", "B"]

/**
 * 🔍 .includes(value)
 * ---------------------
 * THE DETECTIVE: Returns true if the value exists, false if it doesn't.
 */
// ["cat", "dog"].includes("dog"); // true

/**
 * 📊 .sort(compareFunction)
 * ---------------------
 * THE ORGANIZER: Reorders the array.
 * ⚠️ TRICK: For numbers, always use `(a, b) => a - b` to sort properly.
 */
// [10, 2].sort((a,b) => a - b); // [2, 10] (Ascending)

/**
 * ✂️ .slice(start, end)
 * ---------------------
 * THE CUTTER: Copies a part of the array.
 * 💡 TIP: `.slice(0, -1)` removes just the last item.
 */
// "Hello!".slice(0, -1); // "Hello"

/**
 * 📏 .length
 * ---------------------
 * THE RULER: Tells you how many items are inside.
 */
// [1, 2, 3].length; // 3

/* ==================================================================
   🗝️ 2. OBJECT METHODS (Managing Key-Value Pairs)
   ================================================================== */

/**
 * 🏷️ Object.keys(obj)
 * ---------------------
 * GET LABELS: Returns an array of just the keys (names).
 */
// Object.keys({ name: "Raj", age: 20 }); // ["name", "age"]

/**
 * 💎 Object.values(obj)
 * ---------------------
 * GET CONTENT: Returns an array of just the values.
 */
// Object.values({ a: 1, b: 2 }); // [1, 2]

/**
 * 👫 Object.entries(obj)
 * ---------------------
 * GET COUPLES: Returns array of pairs [key, value].
 * Perfect for looping through everything!
 */
// Object.entries({ a: 1 }); // [ ["a", 1] ]

/**
 * 🔐 .hasOwnProperty(key)
 * ---------------------
 * THE OWNER CHECK: Returns true if the object strictly owns that key.
 */
// let obj = { id: 1 };
// obj.hasOwnProperty("id"); // true

/* ==================================================================
   🔤 3. STRING METHODS (Text Manipulation)
   ================================================================== */

/**
 * 🎯 .charAt(index)
 * ---------------------
 * SNIPER: Grabs the specific character at a position.
 */
// "Code".charAt(0); // "C"

/**
 * 📢 .toUpperCase()
 * ---------------------
 * SHOUTING: Converts text to all caps.
 */
// "hi".toUpperCase(); // "HI"

/* ==================================================================
   🧮 4. MATH & LOGIC (The Brains)
   ================================================================== */

/**
 * ✅ Number.isFinite(value)
 * ---------------------
 * REALITY CHECK: Returns true only if it's a real, valid number.
 * Strings looking like numbers ("123") return FALSE.
 */
// Number.isFinite(100); // true
// Number.isFinite("100"); // false

/**
 * ♾️ -Infinity
 * ---------------------
 * THE BOTTOMLESS PIT: The smallest possible number.
 * Use it to start a "Find the Maximum" comparison.
 */
// let max = -Infinity; // Any number you compare will be larger than this.

/**
 * ➗ % (Modulus)
 * ---------------------
 * THE REMAINDER: What's left over after division?
 * 💡 TIP: `x % 2 == 0` is the standard check for Even numbers.
 */
// 10 % 3; // 1 (Because 3 fits into 10 three times, with 1 left over)

/* ==================================================================
   🔄 5. LOOPS (The Workers)
   ================================================================== */

/**
 * 🏎️ for...in
 * ---------------------
 * FOR KEYS: Loops through object property NAMES.
 */
// for (let key in object) { ... }

/**
 * 🚙 for...of
 * ---------------------
 * FOR VALUES: Loops through array ITEMS.
 */
// for (let item of array) { ... }

/*========================== LOGIC DONE =============================*/

/* -------------------------------------------------------------------------- */
/*                           ASSIGNMENT SOLUTIONS                             */
/* -------------------------------------------------------------------------- */

/* ==========================================================================
   Q-01: Sum values in object arrays
   Input: { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
   Output: { food: 60, travel: 20, bills: 100 }
   ========================================================================== */
{
    let data = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
    let foodsum = 0,
        travelsum = 0,
        billssum = 0;

    data.food.forEach((element) => {
        foodsum = foodsum + element;
    });
    data.travel.forEach((element) => {
        travelsum = travelsum + element;
    });
    data.bills.forEach((element) => {
        billssum = billssum + element;
    });

    let ans = {};
    ans.food = foodsum;
    ans.travel = travelsum;
    ans.bills = billssum;
    console.log("Q1:", ans);
}

/* ==========================================================================
   Q-02: Count word occurrences in array
   Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
   Output: { apple: 3, banana: 2, orange: 1 }
   ========================================================================== */
{
    let data = ["apple", "banana", "apple", "orange", "banana", "apple"];
    let ans = {};

    for (let i = 0; i < data.length; i++) {
        if (ans[data[i]]) {
            ans[data[i]]++;
        } else {
            ans[data[i]] = 1;
        }
    }
    console.log("Q2:", ans);
}

/* ==========================================================================
   Q-03: Swap keys and values of object
   Input: { a: "x", b: "y", c: "z" }
   Output: { x: "a", y: "b", z: "c" }
   ========================================================================== */
{
    let data = { a: "x", b: "y", c: "z" };
    let ans = {};

    for (let i in data) {
        ans[data[i]] = i;
    }
    console.log("Q3:", ans);
}

/* ==========================================================================
   Q-04: Find the largest value key
   Input: { a: 10, b: 50, c: 20 }
   Output: b
   ========================================================================== */
{
    let data = { a: 10, b: 50, c: 20 };
    let maxkey = Object.keys(data)[0];

    for (const key in data) {
        if (data[key] > data[maxkey]) {
            maxkey = key;
        }
    }
    console.log("Q4:", maxkey);
}

/* ==========================================================================
   Q-05: Flatten object of arrays into one array
   Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
   Output: ["apple", "banana", "carrot", "pea"]
   ========================================================================== */
{
    let data = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
    let ans = [];

    for (let key in data) {
        ans.push(data[key][0]);
        ans.push(data[key][1]);
    }
    console.log("Q5:", ans);
}

/* ==========================================================================
   Q-06: Group people by city
   Input: [{ name: "A", city: "Delhi" }, { name: "B", city: "Mumbai" }, ...]
   Output: { Delhi: ["A", "C"], Mumbai: ["B"] }
   ========================================================================== */
{
    let data = [
        { name: "A", city: "Delhi" },
        { name: "B", city: "Mumbai" },
        { name: "C", city: "Delhi" },
    ];
    let ans = {};

    for (let i in data) {
        let city = data[i].city;
        let name = data[i].name;

        if (ans[city]) {
            ans[city].push(name);
        } else {
            ans[city] = [name];
        }
    }
    console.log("Q6:", ans);
}

/* ==========================================================================
   Q-07: Filter object by values > 50
   Input: { a: 20, b: 60, c: 40, d: 90 }
   Output: { b: 60, d: 90 }
   ========================================================================== */
{
    let data = { a: 20, b: 60, c: 40, d: 90 };
    let ans = {};

    for (const [key, value] of Object.entries(data)) {
        if (value > 50) {
            ans[key] = value;
        }
    }
    console.log("Q7:", ans);
}

/* ==========================================================================
   Q-08: Find student with highest average mark
   Input: { A: [80, 90], B: [70, 75, 85] }
   Output: A
   ========================================================================== */
{
    let data = { A: [80, 90], B: [70, 75, 85] };
    let maxAvg = -Infinity,
        topStudent = "";

    function sum(arr) {
        let totle = 0;
        arr.forEach((element) => {
            totle = totle + element;
        });
        return totle;
    }

    for (const [key, value] of Object.entries(data)) {
        let avg = sum(value) / value.length;
        if (avg > maxAvg) {
            maxAvg = avg;
            topStudent = key;
        }
    }
    console.log("Q8:", topStudent);
}

/* ==========================================================================
   Q-09: Unique values across all object arrays
   Input: { x: [1,2,3], y: [2,3,4], z: [4,5] }
   Output: [1, 2, 3, 4, 5]
   ========================================================================== */
{
    let data = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
    let ans = [];

    for (const [key, value] of Object.entries(data)) {
        for (const i in value) {
            if (!ans.includes(value[i])) {
                ans.push(value[i]);
            }
        }
    }
    console.log("Q9:", ans);
}

/* ==========================================================================
   Q-10: Pick only given keys from object
   Input: { name: "Rahul", age: 23, city: "Noida" }, keys=["name","city"]
   Output: { name: "Rahul", city: "Noida" }
   ========================================================================== */
{
    let data = { name: "Rahul", age: 23, city: "Noida" };
    let keys = ["name", "city"];
    let result = {};

    for (const key of keys) {
        if (data.hasOwnProperty(key)) {
            result[key] = data[key];
        }
    }
    console.log("Q10:", result);
}

/* ==========================================================================
   Q-12: Sort object entries by values (ascending)
   Input: { a: 3, b: 1, c: 2 }
   Output: [["b", 1], ["c", 2], ["a", 3]]
   ========================================================================== */
{
    let data = { a: 3, b: 1, c: 2 };

    let ans = Object.entries(data).sort((a, b) => a[1] - b[1]);

    console.log("Q12:", ans);
}

/* ==========================================================================
   Q-13: Find the largest value in object
   Input: { a: 1, b: 2, c: 3 }
   Output: 3
   ========================================================================== */
{
    let data = { a: 1, b: 2, c: 3 };
    let ans = data.a;

    for (let v of Object.values(data)) {
        if (ans < v) {
            ans = v;
        }
    }
    console.log("Q13:", ans);
}

/* ==========================================================================
   Q-14: Capitalize string values inside object
   Input: { name: "alice", city: "delhi" }
   Output: { name: "Alice", city: "Delhi" }
   ========================================================================== */
{
    let data = { name: "alice", city: "delhi" };

    for (const key in data) {
        data[key] = data[key].charAt(0).toUpperCase() + data[key].slice(1);
    }
    console.log("Q14:", data);
}

/* ==========================================================================
   Q-15: Convert object to query string
   Input: { name: "Alice", age: 25 }
   Output: "name=Alice&age=25"
   ========================================================================== */
{
    let data = { name: "Alice", age: 25 };
    let ans = "";

    for (const [key, value] of Object.entries(data)) {
        ans = ans + key + "=" + value + "&";
    }
    ans = ans.slice(0, -1);
    console.log("Q15:", ans);
}

/* ==========================================================================
   Q-16: Count even and odd numbers in array
   Input: [1, 2, 3, 4, 5, 6]
   Output: { even: 3, odd: 3 }
   ========================================================================== */
{
    let data = [1, 2, 3, 4, 5, 6];
    let ans = {};
    let evn = 0,
        odd = 0;

    for (const key of data) {
        if (key % 2 == 0) {
            evn++;
        } else {
            odd++;
        }
    }
    ans.even = evn;
    ans.odd = odd;
    console.log("Q16:", ans);
}

/* ==========================================================================
   Q-17: Find common keys between two objects
   Input: { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
   Output: ["b", "c"]
   ========================================================================== */
{
    let data1 = { a: 1, b: 2, c: 3 };
    let data2 = { b: 4, c: 5, d: 6 };
    let k1 = Object.keys(data1);
    let k2 = Object.keys(data2);
    let ans = [];

    for (const i of k1) {
        for (const j of k2) {
            if (i == j) {
                ans.push(j);
            }
        }
    }
    console.log("Q17:", ans);
}

/* ==========================================================================
   Q-18: Convert array of objects to lookup by id
   Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
   Output: { 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } }
   ========================================================================== */
{
    let data = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
    ];
    let ans = {};

    for (const item of data) {
        ans[item.id] = item;
    }
    console.log("Q18:", ans);
}

/* ==========================================================================
   Q-19: Check if all values in object are numbers
   Input: { a: 7, b: 9, c: "3" }
   Output: false
   ========================================================================== */
{
    let data = { a: 7, b: 9, c: "3" };
    let allNumber = true;

    for (const element of Object.values(data)) {
        if (!Number.isFinite(element)) {
            allNumber = false;
            break;
        }
    }
    console.log("Q19:", allNumber);
}
