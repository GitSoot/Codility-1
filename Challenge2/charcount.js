function countChars(str) {
  let counts = new Map();
  for (let char of str) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }
  return Array.from(counts, ([char, count]) => [char, count]);
}

console.log(countChars("abracadabra"));
console.log(countChars("Harry Potter"));