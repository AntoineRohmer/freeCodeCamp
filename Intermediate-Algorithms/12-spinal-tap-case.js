function spinalCase(str) {
  str = str.replace(/[a-z](?=[A-Z])/g, "$& ");
  return str.replace(/\s|_/g, "-").toLowerCase();                                  
}

spinalCase("This Is Spinal Tap");
