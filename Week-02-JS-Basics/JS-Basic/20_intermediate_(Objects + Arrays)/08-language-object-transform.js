
/*
========================================
Q8. TRANSFORM LANGUAGE-KEYED OBJECT(Convert the object where **languages** are the top-level keys,
 and inside each are **translation strings by key into** an object
  where **translation keys** are the top-level keys, and 
  inside each you store values per language [HARD**]
    )
========================================
Input : { en:{}, fr:{}, es:{} }
Output: { hello:{ en, fr, es }, bye:{ en, fr } }
Approach: Loop languages, then flip keys to outer object
JS Used : Object.entries, nested for...of, object access
========================================
*/

let data = {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    es: { hello: "Hola" },
};

let ans = {};

// Accessing object values using [] for variables and . for static keys
for (const [key, value] of Object.entries(data)) {
    for (const item of Object.entries(value)) {
        if (!ans[item[0]]) {
            let obj = {};
            obj[key] = item[1];
            ans[item[0]] = obj;
        } else {
            ans[item[0]][key] = item[1];
        }
    }
}

console.log(ans);
