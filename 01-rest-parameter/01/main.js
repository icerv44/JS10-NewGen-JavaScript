let sum = function (...val) {
  let total = 1;
  for (let x of val) {
    total *= x;
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5));
