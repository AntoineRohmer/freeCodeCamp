//Not a very efficient answer, need to improve this one
function steamrollArray(arr) {
  while (!checkArr(arr)) {
    arr = arr.reduce((a, b) => a.concat(b), []);
  }
  
  function checkArr(arr) {
    var check = true;
    arr.forEach(function(element) {
      if (Array.isArray(element)) {
        check = false;
      }
    });
    return check;
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
