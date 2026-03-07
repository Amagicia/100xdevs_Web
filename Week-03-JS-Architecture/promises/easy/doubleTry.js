// Problem Description – Double Try (Basic Retry)
//
// You are given an async function fn that may fail.
// Your task is to implement doubleTry(fn).
//
// Call fn once. If it succeeds, return the result.
// If it fails, call fn one more time immediately.
// If the second attempt fails, reject with the error.

// async function doubleTry(fn) {
//     try {
//       return await fn();
//     } catch (error) {
//       try {
//         return await fn();
//       } catch(error) {
//         return error; // or return error if you want data-style errors
//       }
//     }

//   }
async function doubleTry(fn) {
    try {
        let data = await fn();
        return data;
    } catch (error) {
        let data2 = await fn();
        if (data2) {
            return data2;
        } else {
            return error;
        }
    }
}
//     // return fn().catch(() => {
//     //     return fn();
//     //   });

module.exports = doubleTry;
