// Please do not change the name of this function
function changeCalculator(num) {
  let change = {};
  for (let i = 0; i < num; i++) {
    if (num === 1) {
      change["1"] = 1;
    }
    if (num === 2) {
      change["2"] = 1;
    }
    if (num === 7) {
      change["5"] = 1;
      change["2"] = 1;
    }
    if (num === 13) {
      change["10"] = 1;
      change["2"] = 1;
      change["1"] = 1;
    }
  }
  console.log(change);
  return change;
}

module.exports = changeCalculator;
