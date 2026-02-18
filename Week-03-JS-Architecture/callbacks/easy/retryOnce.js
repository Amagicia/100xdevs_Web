// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.

function retryOnce(fn) {
    return function (callback) {
        fn((err, res) => {
            if (!err) {
                return callback(null, res);
            } else {
                fn((er, re) => {
                    if (!er) {
                        return callback(null, re);
                    }
                    return callback(er, null);
                });
            }
        });
    };
}
module.exports = retryOnce;
