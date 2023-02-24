function countChars(str) {
  let counts = new Map();
  for (let char of str) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }
  return Array.from(counts, ([char, count]) => [char, count]);
}

//Uncomment code to run test
// console.log(countChars("abracadabra"));
// console.log(countChars("Harry Potter"));
// console.log(countChars("Baker Street"));