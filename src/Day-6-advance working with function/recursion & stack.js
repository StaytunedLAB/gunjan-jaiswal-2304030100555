// RECURSION EXAMPLES + TASK SYSTEM

// ⿡ Simple Recursion (Countdown)
function countdown(n) {
    if (n === 0) {
        console.log("Countdown finished!");
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive Call
}

console.log("=== Countdown Recursion ===");
countdown(5);

// ⿢ Factorial Using Recursion
function factorial(n) {
    if (n === 0) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

// ⿣ Fibonacci Using Recursion
function fibonacci(num) {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log("\n=== Fibonacci ===");
console.log("Fibonacci of 6 =", fibonacci(6));

// TASK SYSTEM (Call Stack Demonstration)

// ⿤ Call Stack Example (task1 → task2 → task3)

function task1() {
    console.log("\nTask 1 started");
    task2();
    console.log("Task 1 ended");
}

function task2() {
    console.log("Task 2 started");
    task3();
 console.log("Task 2 ended");
}

function task3() {
    console.log("Task 3 executed");
}

console.log("\n=== Call Stack Task Example ===");
task1();

// ⿥ Recursion + Task Combined Example
function repeatTask(taskName, count) {
    if (count === 0) {
        console.log("\nAll tasks completed.");
        return;
    }
    
    console.log(Running task: ${taskName}, attempt ${count});

    // Simulate delay in task using setTimeout
    setTimeout(() => {
        console.log(Task ${taskName} completed at attempt ${count});
        repeatTask(taskName, count - 1); // Recursive call
    }, 1000);
}

console.log("\n=== Recursion + Task (with Delay) ===");
repeatTask("Download File", 3);
