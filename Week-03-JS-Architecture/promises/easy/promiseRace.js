// Problem Description – Custom Implementation of Promise.race

// You are required to implement your own version of Promise.race without using the built-in method.
// The function should accept an iterable of values that may include Promises or plain values.
//It must settle as soon as the first input settles, resolving or rejecting accordingly.
// Using Promise.resolve ensures non-promise values are handled correctly.

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
    
        for (let fn of promises) {
            Promise.resolve(fn)
                .then((v) => {
                    return resolve(v); // first fulfillment wins
                })
                .catch((e) => {
                        return reject(e); // first rejecting wins
                });
        }
    });
}

module.exports = promiseRace;
