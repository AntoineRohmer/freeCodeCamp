//Not very elegant
function mutation(arr) {
  var counter = 0;
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) !== -1) {
      counter++;
    }
  }
  return counter >= arr[1].length;
}
mutation(["hello", "hey"]);



//Rafael Rodriguez solution
function mutation(arr) {
  var str = arr[0].toLowerCase().split('');
  var match = arr[1].toLowerCase().split('');
  return match.every(function(char){
    return str.indexOf(char) !== -1;
  });
}

mutation(["hello", "hey"]);
