const quizEl = document.getElementById("quizEl");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const questions = [
  {
    title: "What is the correct way to call a function?",
    choices: [
      "console.long(function)",
      "function()",
      "print.function",
      "document.function",
    ],
    answer: "function()",
  },
  {
    title: "What does var mean?",
    choices: ["various", "variable", "vars", "array"],
    answer: "variable",
  },
];

console.log(questions);
