//Not the best solution
function diffArray(arr1, arr2) {
  var newArr = arr1.filter(function(element) {
    return arr2.indexOf(element) === -1;
  });
  
  return newArr.concat(arr2.filter(function(element){
    return arr1.indexOf(element) === -1;
  }));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Creating a new callback function - from Rafael Rodriguez
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
