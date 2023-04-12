function guessANumber() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let computerGuess = Math.floor(Math.random() * 100);
  let computerGuessSecondLevel = Math.floor(Math.random() * 200);
  let computerGuessThirdLevel = Math.floor(Math.random() * 80);
  let guess;
  let tries = 0;
  const maxTries = 5;

  let recursiveAsyncReadLine = function () {
    readline.question("Guess the number (0-100): ", (number) => {
      guess = Number(number);

      if (guess <= 100 && guess >= 0) {
        if (guess == computerGuess) {
          console.log("You guess it ! Time for Level 2 !");
          secondGuess();
        } else if (guess > computerGuess) {
          console.log("Too high !");
          recursiveAsyncReadLine();
        } else if (guess < computerGuess) {
          console.log("Too low !");
          recursiveAsyncReadLine();
        }
      } else {
        console.log("Invalid input! Try again.");
        recursiveAsyncReadLine();
      }
    });
  };
  recursiveAsyncReadLine();

  let secondGuess = function () {
    readline.question("Guess the number (0-200): ", (number) => {
      guess = Number(number);

      if (guess <= 200 && guess >= 0) {
        if (guess == computerGuessSecondLevel) {
          console.log("You guess it ! Time for Level 3 !");
          thirdGuess();
        } else if (guess > computerGuessSecondLevel) {
          console.log("Too high !");
          secondGuess();
        } else if (guess < computerGuessSecondLevel) {
          console.log("Too low !");
          secondGuess();
        }
      } else {
        console.log("Invalid input! Try again.");
        secondGuess();
      }
    });
  };
  secondGuess();

  let thirdGuess = function () {
    readline.question("Guess the number with 5 attempts (0-80): ", (number) => {
      guess = Number(number);

      tries++;
      if (tries == maxTries) {
        console.log("Sorry, you dont have more attempts ! You have to start from Level 1.");
        return readline.close();
      }

      if (guess <= 80 && guess >= 0) {
        if (guess == computerGuessThirdLevel) {
          console.log("You guess it ! Congratulations !");
          return readline.close();
        } else if (guess > computerGuessThirdLevel) {
          console.log("Too high !");
          thirdGuess();
        } else if (guess < computerGuessThirdLevel) {
          console.log("Too low !");
          thirdGuess();
        }
      } else {
        console.log("Invalid input! Try again.");
        thirdGuess();
      }

    });
  };
  thirdGuess();
}
guessANumber();
