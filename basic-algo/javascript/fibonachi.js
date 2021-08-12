// set document elements
const recursionInput = document.getElementById("recursionInput");
const fibonachiOutput = document.getElementById("fibonachiOutput");

/**
 * @summary string function that takes number - n, and returns a string representing the n fibonachi nummbers
 * @author benllshua
 * @example (3) => 0, 1, 1...
 * @param {number} n
 *  @requires n>2
 * @returns {string}
 */

// mission did not ask to store fibonachi in list to reduce calculatation but it would be nice to add that sometime
function GetFibonachi(n, fibo = [0, 1]) {
  if (fibo.length === n) {
    return fibo.join(", ") + "...";
  } else {
    let nextFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    let newFibo = fibo.concat([nextFibo]);
    return GetFibonachi(n, newFibo);
  }
}

// add event listener to input
recursionInput.addEventListener("change", (e) => {
  const val = parseInt(recursionInput.value);
  switch (val) {
    case 0:
      fibonachiOutput.innerHTML = "min number is 1";
      break;
    case 1:
      fibonachiOutput.innerHTML = "0 is the first fibonachi nummber";
      break;
    default:
      fibonachiOutput.innerHTML = GetFibonachi(val);
      break;
  }
});
