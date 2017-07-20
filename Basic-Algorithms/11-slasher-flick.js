//Splice modifies arr
function slasherSplice(arr, howMany) {
  return arr.splice(howMany);
}

slasherSplice([1, 2, 3], 2);


//Slice does not modify arr
function slasherSlice(arr, howMany) {
  return arr.slice(howMany);
}

slasherSlice([1, 2, 3], 2);
