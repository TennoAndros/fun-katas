// Please do not change the name of this function
function changeCalculator(num) {
  let change = {
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };

  while (num > 0) {
    if (num >= 50) {
      change["50"] += 1;
      num -= 50;
    } else if (num < 50 && num > 20) {
      change["20"] += 1;
      num -= 20;
    } else if (num < 20 && num > 9) {
      change["10"] += 1;
      num -= 10;
    } else if (num < 10 && num > 4) {
      change["5"] += 1;
      num -= 5;
    } else if (num < 5 && num >= 2) {
      change["2"] += 1;
      num -= 2;
    } else {
      change["1"] += 1;
      num -= 1;
    }
  }
  for (let key in change) {
    if (change[key] === 0) delete change[key];
  }
  console.log(change);
  return change;
}

module.exports = changeCalculator;
