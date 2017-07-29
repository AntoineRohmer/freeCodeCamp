function smallestCommons(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var check = false;
  var current = max;
  
  while(!check) {
    if (current%min === 0) {
      check = checkMult(current);
    }
    if (check === false) {
      current += max;
    }
  }
  
  function checkMult(element) {
    var check = true;
    for (var i = min + 1; i < max; i++) {
      if (element%i !== 0) {
        check = false;
      }
    }
    return check;
  }
  return current;
}

smallestCommons([1,5]);
