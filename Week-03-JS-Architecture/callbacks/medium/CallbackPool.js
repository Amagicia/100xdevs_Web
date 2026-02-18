// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.

class CallbackPool {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.active = 0;
        this.finished = 0;
    }
    run(task, onComplete) {
        console.log({ task, onComplete });

        if (this.active > this.limit) {
            this.queue.push(task);
        }
        const handleRequest = (err, result) => {
            this.active--;
            this._next();
            onComplete();
        };
        handleRequest();
    }
    _next() {
      if (this.active >= this.limit){

            this.run(task, handleRequest);
            // handleRequest
        }
    }
}

module.exports = CallbackPool;
