function uniteUnique(arr) {
  var argsArr = [].slice.call(arguments).reduce((a,b) => a.concat(b));
  var newArr = [];
  for (var i = 0; i < argsArr.length; i++) {
    if (newArr.indexOf(argsArr[i]) < 0) {
      newArr.push(argsArr[i]);
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
