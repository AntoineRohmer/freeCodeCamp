function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  else {
    return str.slice(0, num>3 ? num-3: num) + "...";  
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
