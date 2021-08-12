// boolean function that returns true is prop string is a polindrom
// str : string
function IsPolindrom(str) {
  return str === str.split("").reverse().join("");
}

// add event listener to 'polindromInput' that checks if something is a polindrom
const polindromInput = document.getElementById("polindromInput");
polindromInput.addEventListener("change", (e) => {
  const val = polindromInput.value.trim();
  if (val === "") {
    // nothing
    polindromInput.classList.remove("polindrom");
    polindromInput.classList.remove("not-polindrom");
  } else if (IsPolindrom(val)) {
    // polindrom
    polindromInput.classList.add("polindrom");
    polindromInput.classList.remove("not-polindrom");
  } else {
    // not polindrom
    polindromInput.classList.remove("polindrom");
    polindromInput.classList.add("not-polindrom");
  }
});
