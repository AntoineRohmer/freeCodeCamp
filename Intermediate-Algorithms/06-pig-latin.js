function translatePigLatin(str) {
  var match = str.match(/(?=[a-z])[^aeiou]{1,}/);
  if (str.indexOf(match) === 0) {
    return str.replace(match, "") + match + "ay";
  } else {
    return str + "way";
  }
}

translatePigLatin("glove");
