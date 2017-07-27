function sumPrimes(num) {
  var result = 0;
  var checked;
  for (var i = 1; i <= num; i++) {
    checked = true;
    for (var y = 2; y <= Math.floor(Math.sqrt(i)); y++) {
      if (i%y === 0) {
        checked = false;
      }
    }
    if (checked === true) {
      result += i;
    }  
  }
  return result - 1;
}

sumPrimes(10);
