// Problem Description – Task Execution with Dependencies
//
// You are given a set of asynchronous tasks where some tasks depend
// on the completion of others.
// Your goal is to execute each task only after all of its dependencies
// have been successfully completed.
// The solution should ensure correct execution order and handle
// dependency relationships properly.
//
// Each task is asynchronous and must invoke a callback when finished.
// Invoke finalCallback after all tasks have completed, or with an error
// if any task fails.

function runWithDependencies(tasks, finalCallback) {
    const completed = {};
    const results = {};
    let finished = false;
  
    function tryRun() {
      if (finished) return;
  
      // if all tasks are done
      if (Object.keys(completed).length === tasks.length) {
        finished = true;
        return finalCallback(null, results);
      }
  
      for (const task of tasks) {
        if (completed[task.id]) continue;
  
        const ready = task.deps.every(dep => completed[dep]);
        if (!ready) continue;
  
        // mark as running by temporary flag
        completed[task.id] = false;
  
        task.run((err, res) => {
          if (finished) return;
  
          if (err) {
            finished = true;
            return finalCallback(err);
          }
  
          completed[task.id] = true;
          results[task.id] = res;
          tryRun(); // unlock next tasks
        });
      }
    }
  
    tryRun();
  }
  
module.exports = runWithDependencies;
