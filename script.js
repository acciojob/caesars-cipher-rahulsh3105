// Your Script here.
function rot13(str) {
  let decodedStr = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) { // Check if the character is an uppercase letter
      charCode -= 13; // Shift the character code back by 13 places

      if (charCode < 65) {
        charCode += 26; // Wrap around to the end of the alphabet if needed
      }
    }

    decodedStr += String.fromCharCode(charCode); // Convert the character code back to its corresponding character and append it to the decoded string
  }

  return decodedStr;
}
let encodedStr = "EBG13 rknzcyr."; // This is a ROT13 encoded string
let decodedStr = rot13(encodedStr);

console.log(decodedStr); // Output: "ROT13 example."
