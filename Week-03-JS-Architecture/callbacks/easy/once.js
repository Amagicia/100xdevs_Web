// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.

// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.


function once(fn) {
    let result, err;
    let finish = false;
    let stop = false;
    let queue = [];

    return function (...params) {
        let callback = params.pop();

        if (finish) {
            return callback(err, result);
        }
        queue.push(callback);
        if (stop) {
            return;
        }

        stop = true;
        // if (!finish) {
        fn(...params, (e, res) => {
            result = res;
            err = e;
            finish = true;
            while (queue.length) {
                let cb = queue.shift();
                cb(err, result);
            }
        });
    };
    // };
}

module.exports = once;
