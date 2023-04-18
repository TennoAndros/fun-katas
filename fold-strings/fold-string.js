// Please do not change the name of this function
function foldString(str) {
  const arrWords = str.split(" ");

  const middleWord =
    arrWords.length % 2 === 1 && arrWords.length > 1
      ? arrWords[Math.floor(arrWords.length / 2)]
      : "";

  const wordsReversed = arrWords.map((word) => {
    if (middleWord === word) {
      return word;
    }

    const arrString = word.split("");
    if (word.length <= 3) {
      return arrString.reverse().join("");
    }
    const midIndex = Math.floor(arrString.length / 2);
    const left = arrString.slice(0, midIndex).reverse().join("");

    const right =
      arrString.length % 2 === 0
        ? arrString.slice(midIndex).reverse().join("")
        : arrString
            .slice(midIndex + 1)
            .reverse()
            .join("");

    const tempLetter = arrString.length % 2 === 0 ? "" : arrString[midIndex];
    return left + tempLetter + right;
  });

  return wordsReversed.join(" ");
}

// function foldString(str) {
//   if (typeof str !== "string") return "";
//   const arrOfWords = str.split(" ");
//   return arrOfWords
//     .map((word) => {
//       let length = word.length;
//       let middleLetter = length / 2;
//       let foldedWord = [];

//       if (length % 2) {
//         foldedWord.push(word.slice(0, Math.floor(middleLetter)));
//         foldedWord.push(
//           word.slice(Math.floor(middleLetter), Math.floor(middleLetter) + 1)
//         );
//         foldedWord.push(word.slice(Math.floor(middleLetter) + 1));
//       } else {
//         foldedWord.push(word.slice(0, middleLetter));
//         foldedWord.push(word.slice(middleLetter));
//       }
//       return foldedWord
//         .map((element) => element.split("").reverse().join(""))
//         .join("");
//     })
//     .join(" ");
// }




// length = 4
// 2 mesh
// arr1 = co
// arr2 = de
// arr1= oc
// arr2= ed
// oced
// 
module.exports = foldString;
