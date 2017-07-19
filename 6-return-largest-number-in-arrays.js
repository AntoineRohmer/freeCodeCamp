function largestOfFour(arr) {
    return arr.map(function(subArr) {
      return subArr.sort((curr, next)=> curr < next)[0];
    });
}

//Shorter solution from Rafael Rodriguez
function largestOfFour2(arr) {
  return arr.map((list) => list.reduce((a, b) => a > b ? a : b));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


