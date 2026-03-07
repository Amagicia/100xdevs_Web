// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const usersData = await response.json();
//         console.log(usersData[0]);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

// getUsers();

// let usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // convert the response to JSON
//     return response.json();
//   })
//   .then((usersData) => {
//     // usersData is now the array of users
//     console.log(usersData);
//   })
//   .catch((error) => {
//     console.error("Error fetching users:", error);
//   });

function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), ms)
    );
    return Promise.race([promise, timeout]);
}
const API = "https://jsonplaceholder.typicode.com";

const fetchJSON = (url) =>
    fetch(url).then((res) => {
        if (!res.ok) throw new Error("HTTP Error");
        return res.json();
    });

const fetchUser = () => fetchJSON(`${API}/users/1`);
const fetchPosts = () => fetchJSON(`${API}/posts?userId=1`);
const fetchComments = () => fetchJSON(`${API}/comments?postId=1`);
const fetchTodos = () => fetchJSON(`${API}/todos?userId=1`);

// Simulated analytics servers
const analyticsPrimary = () => Promise.reject("Primary analytics down");

const analyticsBackup = () => Promise.resolve({ visitors: 1234 });

async function loadDashboard() {
    try {
        // 1️⃣ REQUIRED DATA (parallel + timeout)
        const [user, posts] = await Promise.all([
            withTimeout(fetchUser(), 3000),
            withTimeout(fetchPosts(), 3000),
        ]);

        // 2️⃣ OPTIONAL DATA (never fail dashboard)
        const optionalResults = await Promise.allSettled([
            fetchComments(),
            fetchTodos(),
        ]);
console.log(optionalResults);

        const comments =
            optionalResults[0].status === "fulfilled"
                ? optionalResults[0].value
                : [];

        const todos =
            optionalResults[1].status === "fulfilled"
                ? optionalResults[1].value
                : [];

        // 3️⃣ ANALYTICS (fallback logic)
        const analytics = await Promise.any([
            analyticsPrimary(),
            analyticsBackup(),
        ]);

        return {
            user,
            posts,
            comments,
            todos,
        };
    } catch (err) {
        // 4️⃣ GLOBAL FAILURE
        console.error("Critical dashboard error:", err.message);
        throw err;
    }
}
let data = await loadDashboard();
// console.log(data);
