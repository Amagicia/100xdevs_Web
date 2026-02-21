// Problem Description – Yielding a CPU-Intensive Task
//
// You are given a CPU-heavy computation that runs inside a loop.
// Instead of blocking the event loop completely, your task is to
// periodically yield control back to the event loop.
//
// By using setTimeout inside an async function, the computation
// should pause every fixed number of iterations, allowing other
// asynchronous tasks (like timers or I/O callbacks) to run.

//? make a promise resolve after a chunk of time so CPU can't run sync way , await for promise resolve that give time to runs the
//? event loop and other async task 

async function yieldedCPU(iterations) {
    let c = 0;
    const CHUNK_SIZE = 10;

    for (let i = 0; i < iterations; i++) {
        c = c + i;
        if (i % CHUNK_SIZE == 0) {
            await new Promise((resolve) => setTimeout(resolve, 0));
        }
    }
    return c;
}

module.exports = yieldedCPU;
