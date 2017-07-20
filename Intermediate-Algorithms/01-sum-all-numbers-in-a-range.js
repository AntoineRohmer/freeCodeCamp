//Recursive Solution
function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  if (max === min) {
    return max;
  }
    return max + sumAll([min, max-1]);
}
sumAll([5, 10]);

//Using an Arithmetic Progression formula 
function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  return ((min + max) * (max-min + 1))/2;
}

sumAll([5, 10]);
