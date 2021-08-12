const fs = reqire("fs");
const jokeSubject = "funny";
const jokeAmount = 100;
let jokeList = [];

if (jokeSubject) {
  if (jokeAmount < 50) {
    for (let i = 0; i < jokeAmount; i++) {
      // generate new joke
      let joke = new Joke(jokeSubject);
      while (jokeList.join().includes(joke)) {
        joke = new Joke(jokeSubject);
      }

      jokeList.push(joke);
    }

    createFile("fileName", jokeList.join("\r\n"));
  } else {
    console.error("joke amount is less then 50");
  }
} else {
  console.error("no joke subject");
}
