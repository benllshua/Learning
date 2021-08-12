// HtmlElements
const asyncInput = document.getElementById("asyncInput");
const mission1button = document.getElementById("mission1button");
const mission2button = document.getElementById("mission2button");
const mission3FirstNumber = document.getElementById("mission3FirstNumber");
const mission3SecondNumber = document.getElementById("mission3SecondNumber");
const waitingAnimation = document.getElementById("waitingAnim");

// -----------------------
// --- event listeners ---
// -----------------------

mission1button.addEventListener("click", async (e) => {
  Wait();
  await mission1(asyncInput.value).then((res) => {
    asyncInput.value = res;
  });
  Continue();
});

mission2button.addEventListener("click", async (e) => {
  Wait();
  await mission2(asyncInput.value)
    .then((res) => {
      asyncInput.value = res;
    })
    .catch((err) => {
      asyncInput.value = err;
    });
  Continue();
});

mission3button.addEventListener("click", async (e) => {
  Wait();
  await mission3(parseInt(mission3FirstNumber.value), parseInt(mission3SecondNumber.value))
    .then((res) => {
      asyncInput.value = res;
    })
    .catch((err) => {
      asyncInput.value = err;
    });
  Continue();
});

// -----------------
// --- functions ---
//------------------

// void function that disable input and show animation
function Wait() {
  asyncInput.disabled = true;
  waitingAnimation.classList.remove("hide");
}

// void function that enable input and hide animation
function Continue() {
  asyncInput.disabled = false;
  waitingAnimation.classList.add("hide");
}

// async string function that return "message info:" + str
// str : string
function mission1(str) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("message info:" + str);
    }, 2000);
  });
}

// async string function that return "ok" if 'str' = "good" else reject with massage
// str : string
function mission2(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str === "good") {
        resolve("ok");
      } else {
        reject("the message is incorrect");
      }
    }, 2000);
  });
}

// async string function that return a massage saying what number is bigger
// num1, num2 : numbers
function mission3(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 != "number" || typeof num2 != "number") {
        reject("Wrong input");
      }
      if (num1 > num2) {
        resolve("First number is bigger");
      } else if (num1 < num2) {
        resolve("Second number is bigger");
      } else {
        resolve("they are equal");
      }
    }, 2000);
  });
}
