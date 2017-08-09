function convertToRoman(num) {
  var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "DC", "D", "CM", "M"];
  var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var temp; 
  var retString = '';
  
  for (var i = num; i > 0; i-= temp) {
    var x = decimal.length - 1;
    while (decimal[x] > i) {
      x--;
    }
    temp = decimal[x];
    retString += roman[x];
  }
 return retString;
}

convertToRoman(97);
