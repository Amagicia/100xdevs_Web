// Problem Description – Async Initialization Gate
//
// You are required to design a mechanism for APIs that depend on an
// asynchronous initialization step.
// Any calls made before initialization completes should be queued and
// executed only after the initialization finishes.
// Calls made after initialization should execute immediately.
//
// The initialization task and API functions must invoke callbacks when
// they complete.
class GuardedAPI {
    constructor() {
        this.initDone = false;
        this.queue = [];
    }
    init(initTask) {
        initTask(() => {
            this.initDone = true;
            this._flush();
        });
    }
    call(apiFn, onComplete) {
        if (this.initDone) {
            apiFn((err, res) => {
                onComplete(err, res);
            });
        } else {
            this.queue.push({ apiFn, onComplete });
        }
    }
    _flush() {
        while (this.queue.length > 0) {
            let { apiFn, onComplete } = this.queue.shift();
            apiFn((err, res) => {
                onComplete(err, res);
            });
        }
    }
}

module.exports = GuardedAPI;
