// Fibonacci Series using for loop
function fibonacci(n) {
  let a = 0;
  let b = 1;

  console.log(a); // first term
  if (n > 1) console.log(b); // second term

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);

    a = b;
    b = next;
  }
}

fibonacci(10); // prints first 10 Fibonacci numbers
