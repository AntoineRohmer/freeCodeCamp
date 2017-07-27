function sumFibs(num) {
  var curr = 1;
  var last = 0;
  var result = 0; 
  while (num >= curr) {
    if (curr%2 !== 0) {
      result += curr;
    }
    var temp = curr + last;
    last = curr;
    curr = temp;
  }
  return result;
}

sumFibs(4);
