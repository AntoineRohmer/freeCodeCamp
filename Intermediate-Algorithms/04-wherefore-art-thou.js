
//Rafael Rodriguez's solution
function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  arr = collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return arr;
}

whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, 
{ first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });



//Not an elegant solution. 
function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  collection.forEach(function(element) {
    if(checkKeys(keys, element)) {
      arr.push(element);
    } 
  });
  
  function checkKeys(keys, element) {
    var checked = true;
    keys.forEach(function(key) {
      if (!element.hasOwnProperty(key) || element[key] !== source[key]) {
        checked = false;
      }
    });
    return checked;
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
