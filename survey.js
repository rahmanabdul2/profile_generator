const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// must write nested callbacks
// 

rl.question("What's your name? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (e.g, dinner, brunch etc.)? ", (answer4) => {
        console.log(`This is ${answer1}. ${answer1} listens to ${answer3} while doing his favourite activity - ${answer2}. At last, his/her favorite meal is ${answer4}.`);
        rl.close();
      });
    });
  });
});