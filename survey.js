const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Create object with questions and prepared for the answers
const queries = {
  0: "What's your name? Nicknames are also acceptable: " ,
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that? ",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: ""
};

let i = 0;

//Question function to fill object with answers and display them on screen
const question = function() {
  if (i < 7) { //function runs before questions ends
    rl.question(`${queries[i]}\n`, (answer) => {
      answers[i] = answer;
      i++;
      question(); //after each question function call itself to go for the next question
    });
  } else {  // printout of answers
    rl.close();
    console.log("Your profile");
    console.log(`My name is ${answers[0]}, I love doing ${answers[1]} and listen to ${answers[2]}
  I really enjoy eating at ${answers[3]}, and my favorite food is ${answers[4]}, my favorite sport is ${answers[5]},
  and I would say that my superpower is ${answers[6]}`);
  }
};

question();
