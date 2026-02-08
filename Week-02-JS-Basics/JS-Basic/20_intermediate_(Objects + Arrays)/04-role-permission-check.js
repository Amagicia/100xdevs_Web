/*
========================================
Q4. CHECK PERMISSIONS FROM ROLES
========================================
Input : roles={ admin:["read","write"], user:["read"], staff:["write"] }
        role="user", action="write"
Output: false
Approach: Fetch role actions and check inclusion
JS Used : function, object access, Array.includes, if
========================================
*/

const data = {
    admin: ["read", "write"],
    user: ["read"],
    staff: ["write"],
};

function checkPermission(role, action) {
    // Get allowed actions for the given role
    const allowedActions = data[role];

    // Check role existence and permission
    if (allowedActions && allowedActions.includes(action)) {
        return true;
    }

    return false;
}

// Tests
console.log(checkPermission("staff", "read"));   // false
console.log(checkPermission("user", "read"));    // true
console.log(checkPermission("admin", "write"));  // true
console.log(checkPermission("unknown", "read")); // false
