// Please do not change the name of this function
function changeCalculator(num) {
  let change = {
    // 50: 0,
    // 20: 0,
    // 10: 0,
    // 5: 0,
    // 2: 0,
    // 1: 0,
  };
  // value = condition? scenario if true: scenario if false;
  // while (num > 0) {
  //   if (num >= 50) {
  //     change["50"] = change["50"] ? ++change["50"] : 1;
  //     num -= 50;
  //   } else if (num < 50 && num > 20) {
  //     change["20"] = change["20"] ? ++change["20"] : 1;
  //     num -= 20;
  //   } else if (num < 20 && num > 9) {
  //     change["10"] = change["10"] ? ++change["10"] : 1;
  //     num -= 10;
  //   } else if (num < 10 && num > 4) {
  //     change["5"] = change["5"] ? ++change["5"] : 1;
  //     num -= 5;
  //   } else if (num < 5 && num >= 2) {
  //     change["2"] = change["2"] ? ++change["2"] : 1;
  //     num -= 2;
  //   } else {
  //     change["1"] = change["1"] ? ++change["1"] : 1;
  //     num -= 1;
  //   }

  //   console.log(change);
  // }
  // for (let key in change) {
  //   if (change[key] === 0) delete change[key];
  // }

  if (num % 50 !== num ) {
    change["50"] = Math.floor(num / 50);
    num -= change["50"] * 50;
  }
  if (num % 20 !== num) {
    change["20"] = Math.floor(num / 20);
    num -= change["20"] * 20;
  }
  if (num % 10 !== num) {
    change["10"] = Math.floor(num /10);
    num -= change["10"] * 10;
  }
  if (num % 5 !== num) {
    change["5"] = Math.floor(num / 5);
    num -= change["5"] * 5;
  }
  if (num % 2 !== num) {
    change["2"] = Math.floor(num / 2);
    num -= change["2"] * 2;
  }
  if (num) {
    change["1"] = 1;
  }

  return change;
}

// while (num >= 50) {
//   change["50"] = change["50"] ? ++change["50"] : 1;
//   num -= 50;
// }
// while (num <= 49 && num >= 20) {
//   change["20"] = change["20"] ? ++change["20"] : 1;
//   num -= 20;
// }
// while (num <= 19 && num >= 10) {
//   change["10"] = change["10"] ? ++change["10"] : 1;
//   num -= 10;
// }
// while (num <= 9 && num >= 5) {
//   change["5"] = change["5"] ? ++change["5"] : 1;
//   num -= 5;
// }
// while (num <= 4 && num > 1) {
//   change["2"] = change["2"] ? ++change["2"] : 1;
//   num -= 2;
// }
// if (num) {
//   change["1"] = change["1"] ? ++change["1"] : 1;
// }

// return change;
module.exports = changeCalculator;
