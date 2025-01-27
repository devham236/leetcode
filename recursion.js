function fn(i) {
  if (i > 3) return;

  console.log(i);
  fn(i + 1);
  console.log(`End of call where i = ${i}`);
  return;
}

fn(1);

// Every function call "exists" until it returns. When we move to a different function call, the old one waits until the new one returns. The order in which the calls happens is remembered, and the lines within the functions are executed in order.
