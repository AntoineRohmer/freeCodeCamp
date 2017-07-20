function chunkArrayInGroups(arr, size) {
  var returnArr = [];
  for (var i = 0; i < arr.length; i+= size){
    returnArr.push(arr.slice(i, i + size));
  }
  return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
