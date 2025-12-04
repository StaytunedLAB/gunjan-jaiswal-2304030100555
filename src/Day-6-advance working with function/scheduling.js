//Combined Scheduling Example

console.log("App started...");

// 1) A repeating interval
let seconds = 0;
const timer = setInterval(() => {
    seconds++;
    console.log(Timer running: ${seconds} seconds);

    if (seconds === 10) {
        clearInterval(timer);
        console.log("Timer stopped at 10 seconds");
    }
}, 1000);

// 2) A delayed task using setTimeout
setTimeout(() => {
    console.log("This message appears after 5 seconds (via setTimeout)");
}, 5000);