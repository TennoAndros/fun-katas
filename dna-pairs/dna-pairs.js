// Please do not change the name of this function
//C -> G
//T -> A
function dnaPairs(dna) {
  const pairs = [];
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "G":
        pairs.push(["G", "C"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
    }
  }

  return pairs;
}

module.exports = dnaPairs;
//ftiaxnw ena array

//pusharw sto array
//epistrefw array
