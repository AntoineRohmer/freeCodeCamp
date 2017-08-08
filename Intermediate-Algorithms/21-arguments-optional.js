function addTogether() {
  var arg0 = arguments[0], ret;
  if (arguments.length === 2) {
    if (typeof arg0 == 'number' && typeof arguments[1] == 'number') {
      ret = arg0 + arguments[1];
    } 
  } else if (typeof arg0 == 'number') {
    var add = function(element) {
      if (typeof element == 'number')
      return arg0 + element;
    };
    return add;
  }
  return ret;
}

addTogether(2, 3);
