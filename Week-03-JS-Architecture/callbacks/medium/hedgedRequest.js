// Problem Description – Hedged Request
//
// You have a Primary async source and a Secondary backup.
// Start the Primary immediately. If it is slow, start the Secondary.
//
// Return the first successful result and ignore the rest.
// Only fail if both fail, and ensure the callback runs once.
//
// Requirements:
// - Start Primary immediately.
// - Start Secondary after timeoutMs if needed.
// - First success wins.
// - Callback must be called exactly once.
// function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
//     let secondaryCalled = false;

//     let timer = setTimeout(() => {
//         if (!secondaryCalled) {
//             secondary((err, res) => {
//                 secondaryCalled=true;
//                 if (!err) {
//                     return onComplete(null, res);
//                 }
//                 return onComplete(err);
//             });
//         }
//     }, timeoutMs);

//     primary((err, res) => {
//         if(!secondaryCalled){
//             if (!err) {
//                 secondaryCalled=true;
//                 clearTimeout(timer);
//                 return onComplete(null, res);
//             }
//         }
//     });
// }

// ? Optimized way
function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
    let finished = false;
    let failures = 0;
    let timer = null;

    function done(err, res) {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        onComplete(err, res);
    }

    function handleResult(err, res) {
        if (!err) {
            done(null, res); // first success wins
        } else {
            failures++;
            if (failures === 2) {
                done(err); // only fail if both fail
            }
        }
    }

    // start primary immediately
    primary(handleResult);

    // start secondary after timeout
    timer = setTimeout(() => {
        secondary(handleResult);
    }, timeoutMs);
}

module.exports = hedgedRequest;
