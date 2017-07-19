function palindrome(str) {
  var regStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = regStr.split('').reverse().join('');
  return regStr === reverseStr;
}

palindrome('eye');
