function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((curr, next) => curr > next).indexOf(num);
}
getIndexToIns([5, 3, 20, 3], 5);

//Can also use the Array.prototype.findIndex() function
