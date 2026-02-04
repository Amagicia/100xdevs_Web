/*
4. Check for permissions from roles
    - Input:
        
        ```jsx
        roles={ admin:["read","write"], user:["read"], staff: ["write"]}
        checkRole="user",
        action="write"
        ```
        
    - Output:
        
        ```jsx
        false
        ```
         */

const data = {
    admin: ["read", "write"],
    user: ["read"],
    staff: ["write"],
};
function checkPermission(role, action) {
    // 1. Get the list of allowed actions for this role from the object
    const allowedActions = data[role];
    //console.log(allowedActions);//If role other then 3 it show undefined

    // 2. Check if the role exists AND if the list includes the action
    if (allowedActions && allowedActions.includes(action)) {
        return true;
    }

    return false;
}

// Tests
console.log(checkPermission("staff", "read")); // Output: false
console.log(checkPermission("user", "read")); // Output: true
console.log(checkPermission("admin", "write")); // Output: true
console.log(checkPermission("unknown", "read")); // Output: false

// function checkRole(role, action) {
//     if (role == "admin") {
//         console.log(true);
//     } else if (role == "user" && action == "read") {
//         console.log(true);
//     } else if (role == "staff" && action == "write") {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// checkRole("staff", "read");
