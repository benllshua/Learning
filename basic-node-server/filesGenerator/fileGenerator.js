const randomWords = require("");
const fs = require("fs");

const filesAmount = 6;
let wordAmount = 10;

// void function that creates files by wordAmount and filesAmount
async function createFiles() {
  // cycle for each file
  for (let fileIndex = 0; fileIndex < filesAmount; fileIndex++) {
    // create word list
    let wordsInFile = [];
    for (let wordIndex = 0; wordIndex < wordAmount; wordIndex++) {
      wordsInFile.push(GetRandomWord());
    }

    // create file
    await createFile(fileName, wordsInFile)
      .then((res) => {
        console.log(`new file: "${fileName} has ${wordAmount} words"`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // increase word amount for next file
  wordAmount *= 2;
}

function createFile(fileName, wordList) {
  return new Promise((resolve, reject) => {
    try {
      resolve(wordList.join(", "));
    } catch (error) {
      reject(error);
    }
  });
}

// call createFiles function
createFiles();
