const prompt = require("prompt-sync")();
const words = ["code", "alex", "diaz", "chipotle"];

function main() {
   let array = new Array();
   //pick one of the words randomly
   let rand = Math.floor(Math.random() * words.length);
   let correctWord = words[rand];

   for (let i = 0; i < correctWord.length; i++) {
      array.push("-");
   }

   let guesses = 0;
   while (guesses < 11 && array.includes("-")) {
      console.log(array.join(''));
      let letter = prompt("Please guess a letter: ");
      if (letter.length !== 1) {
         console.log("Please enter a single letter.");
         continue;
      }
      guess(letter, correctWord, array);
      if (!correctWord.includes(letter)) {
         guesses++;
         console.log(`Incorrect! You have ${11 - guesses} guesses left.`);
      }
   }

   if (array.includes("-")) {
      console.log(`Sorry, you lost! The word was: ${correctWord}`);
   } else {
      console.log(`Congratulations! You guessed the word: ${correctWord}`);
   }
}

function guess(s, word, arr) {
   for (let i = 0; i < word.length; i++) {
      if (s === word[i]) {
         arr[i] = s; // replace the dash with the correct letter
      }
   }
}

main();

