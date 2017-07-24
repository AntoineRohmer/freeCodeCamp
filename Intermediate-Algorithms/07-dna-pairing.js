function pairElement(str) {
  var arr = [];
  str.split("").forEach(function(element) {
    var newArr = [element];
    switch(element) {
      case "C":
        newArr.push("G");
        break; 
      case "G":
        newArr.push("C");
        break; 
      case "A":
        newArr.push("T");
        break; 
      case "T":
        newArr.push("A");
        break; 
    }
    arr.push(newArr);
  });
  return arr;
}

pairElement("GCG");
