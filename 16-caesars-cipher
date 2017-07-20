function rot13(str) { 
  
  var chars = [];
  for (var i = 0; i < str.length; i++) {
    var x = str.charCodeAt(i);
    if (x < 65 || x > 96)
      chars.push(x);
    else 
      chars.push((x%26) + 65);
    }
  
  return String.fromCharCode.apply(null, chars);
  }

rot13("SERR CVMMN!");
