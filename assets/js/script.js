//Timer

document.getElementById("quizBegins").addEventListener("click", function () {
  var secondsLeft = 60;
  var downloadTimer = setInterval(function function1() {
    document.getElementById("countdown").innerHTML = secondsLeft;

    secondsLeft -= 1;
    if (secondsLeft <= 0) {
      clearInterval(downloadTimer);
    }
  }, 1000);
});

//Set Scores

const questions = [
  {
    title: "What is the correct way to call a function?",
    code: "",
    choices: [
      "console.long(function)",
      "function()",
      "print.function",
      "document.function",
    ],
    answer: "function()",
  },
];
