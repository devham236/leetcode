/* Example 1 */
function fn(i) {
  if (i > 3) return;

  console.log(i);
  fn(i + 1);
  console.log(`End of call where i = ${i}`);
  return;
}

fn(1);
/* Output */
// 1
// 2
// 3
// End of call where i = 3
// End of call where i = 2
// End of call where i = 1

/* Example 2 */
function countDown(n) {
  if (n <= 0) return;

  console.log(n);
  countDown(n - 1);
  console.log(`Returning from n = ${n}`);
}

countDown(3);
/* Output */
// 3
// 2
// 1
// Returning from n = 1
// Returning from n = 2
// Returning from n = 3

/* Example 3 */
function doubleCall(n) {
  if (n > 2) return;

  console.log(`Start call n = ${n}`);
  doubleCall(n + 1);
  doubleCall(n + 1);
  console.log(`End call n = ${n}`);
}

doubleCall(0);

/* Output */
// Start call n = 0
// Start call n = 1
// Start call n = 2
// End call n = 2
// Start call n = 2
// End call n = 2
// End call n = 1
// Start call n = 1
// Start call n = 2
// End call n = 2
// Start call n = 2
// End call n = 2
// End call n = 1
// End call n = 0

/* Example 4 */
function sum(n) {
  if (n === 1) return 1;

  let result = n + sum(n - 1);
  console.log(`Sum at n = ${n} is ${result}`);
  return result;
}

sum(4);

/* Output */
// Sum at n = 2 is 3
// Sum at n = 3 is 6
// Sum at n = 4 is 10
