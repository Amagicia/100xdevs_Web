// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) {
            reject(new TypeError("Input must be an array"));
            return;
        }

        if (promises.length === 0) {
            reject(new Error("Empty iterable"));
            return;
        }

        let rejectedCount = 0;

        for (let fn of promises) {
            Promise.resolve(fn)
                .then((v) => {
                    resolve(v); // first fulfillment wins
                })
                .catch(() => {
                    rejectedCount++;
                    if (rejectedCount === promises.length) {
                        reject(new Error("All promises were rejected"));
                    }
                });
        }
    });
}
module.exports = promiseAny;
