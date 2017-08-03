function dropElements(arr, func) {
  var check = true;
  while(check) {
    if (!Array.isArray(arr) || !arr.length) {
      check = false;
    }
    else if (!func(arr[0])) {
      arr.shift();
    }
    else {
      check = false;
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
