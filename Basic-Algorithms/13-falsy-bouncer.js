
//Assignment is not necessary here
function bouncer(arr) {
  return arr.filter(function(element) {
    return element = Boolean(element);
  });
}

bouncer([7, "ate", "", false, 9]);

//From Rafael Rodriguez
// Boolean is a function so it acts as a callback here instead of Boolean(arg)
function bouncer(arr) {
  // Boolean is a function so it acts as a callback here instead of Boolean(arg)
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
