function myReplace(str, before, after) {
  var whatCase = before[0];
  if (whatCase === whatCase.toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
