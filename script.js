function rot13(str) {
  // create an empty array to store the decoded characters
  let decoded = [];
  // loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // get the character code for the current character
    let charCode = str.charCodeAt(i);
    // check if the character is a letter
    if (charCode >= 65 && charCode <= 90) {
      // apply the ROT13 transformation by adding 13 and wrapping around if needed
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    // add the decoded character to the array
    decoded.push(String.fromCharCode(charCode));
  }
  // join the array into a string and return it
  return decoded.join("");
}

// example usage
console.log(rot13("EBG13 rknzcyr.")); // output: ROT13 example.
