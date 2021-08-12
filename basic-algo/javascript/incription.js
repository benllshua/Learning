// set html elements
const massageInput = document.getElementById("incriptionInput");
const numberInput = document.getElementById("incriptionNumber");

// a_zHigher & a_zLower are imported from "a_zLetters" and store all letters in English

/**
 * @summary string function that takes existing string and incript each letter by n letters back
 * @author benllshua
 * @example ("df", 3) => "ac"
 * @param {string} str
 * @param {number} n
 *
 * @returns {string} incripted string
 */

function Incript(str, n) {
  let incriptedLetters = [];
  const letters = str.split("");

  letters.forEach((letter) => {
    if (letter === " ") {
      incriptedLetters.push(" ");
    } else if (letter === letter.toUpperCase()) {
      // UPPER CASE LETTER
      let pos = a_zHigher.indexOf(letter);
      pos += n;
      if (pos >= 26) {
        pos -= 26;
      }
      incriptedLetters.push(a_zHigher[pos]);
    } else if (letter === letter.toLowerCase()) {
      // lower case letters
      let pos = a_zLower.indexOf(letter);
      pos += n;
      if (pos >= 26) {
        pos -= 26;
      }
      incriptedLetters.push(a_zLower[pos]);
    }
  });

  return incriptedLetters.join("");
}

// event listeners to inputs and buttons

massageInput.addEventListener("keyup", (event) => {
  if (massageInput.value.match(/[^a-zA-z\s]/g)) {
    massageInput.value = massageInput.value.replace(/[^a-zA-z\s]/g, "");
  }
});

let decodeVal = "";

function IncriptClick() {
  if (!massageInput.disabled) {
    decodeVal = massageInput.value;
    massageInput.value = Incript(massageInput.value.trim(), parseInt(numberInput.value));
    massageInput.disabled = true;
  }
}

function DecodeClick() {
  if (massageInput.disabled) {
    massageInput.value = decodeVal;
    massageInput.disabled = false;
  }
}
