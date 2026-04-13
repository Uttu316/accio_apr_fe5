let x = 5;

function sum(x, y, operation, print) {
  let z = 8;

  let p = operation(x, y) + operation(y, x);
  print(p + z);
}

function print(value) {
  console.log("Ans: ", value);
}

function mul(l, m) {
  return l * m * x;
}

sum(2, 3, mul, print);
