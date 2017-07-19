function findLongestWord(str) {
  return sorted = str.split(' ').sort((curr, next)=> curr.length < next.length)[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
