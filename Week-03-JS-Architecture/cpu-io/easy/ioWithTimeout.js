// Problem Description – I/O Operation With Timeout
//
// You are given an asynchronous function that represents an I/O-bound task
// (such as a network request or database call).
//
// Your task is to execute this function, but enforce a time limit.
// If the I/O operation does not complete within the specified number
// of milliseconds, the returned promise should reject with a "Timeout" error.

async function ioWithTimeout(fn, ms) {
    return new Promise((resolve, reject) => {
        let timer = setInterval(function () {
            reject("Timeout");
        }, ms);

        fn()
            .then((r) => {
                clearInterval(timer);
                resolve(r);
            })
            .catch((e) => {
                clearInterval(timer);
                reject(e);
            });
    });
}

module.exports = ioWithTimeout;
