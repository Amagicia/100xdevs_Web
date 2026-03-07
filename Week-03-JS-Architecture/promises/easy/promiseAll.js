// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method.
// The function should accept an array of values that may include Promises or plain constants.
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve([]);
        if (!Array.isArray(promises)) {
            reject(new TypeError("Input must be an array"));
            return;
          }
        let result = [];
        let comp = 0;
        let i = 0;
        for (let fn of promises) {
            let current = i;
            i++;
            Promise.resolve(fn)
                .then((v) => {
                    result[current] = v;
                    comp++;
                    if (comp == promises.length) {
                        return resolve(result);
                    }
                })
                .catch((e) => {
                    reject(e);
                    return;
                });
        }
    });
}
module.exports = promiseAll;
