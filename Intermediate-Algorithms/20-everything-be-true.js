function truthCheck(collection, pre) {
  var check = true;
  collection.forEach(function(element) {
    if (!element.hasOwnProperty(pre) || !Boolean(element[pre])) {
      check = false;
    }
  });
  return check;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//More advanced solution
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
