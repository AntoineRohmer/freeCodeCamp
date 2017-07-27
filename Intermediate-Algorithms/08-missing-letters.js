function fearNotLetter(str) {
  var charCode;
  for(var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1)) {
    } else {
      charCode = str.charCodeAt(i) + 1;
      return String.fromCharCode(charCode);
    }
  }
  return undefined;
}

fearNotLetter("abce");
