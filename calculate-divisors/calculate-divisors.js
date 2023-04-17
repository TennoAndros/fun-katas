// Please do not change the name of this function
function calculateDivisors(num) {
  let sum = 0;
  if (num) {
    for (let i = 3; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
  }
  return sum;
}

module.exports = calculateDivisors;
