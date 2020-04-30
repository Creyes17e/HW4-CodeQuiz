//Elements
const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const timer = document.getElementById("timer");
const quizEl = document.getElementById("quizEl");
const question = document.getElementById("question");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");

//Questions
const questions = [
  {
    question: "What is the correct way to call a function?",

    choice1: "function()",
    choice2: "console.long(function)",
    choice3: "print.function",
    choice4: "document.function",
    correct: "1",
  },
  {
    question: "Var is used to delcare the ___ in JavaScript?",

    choice1: "various",
    choice2: "variable",
    choice3: "print.option",
    choice4: "array",
    correct: "2",
  },

  {
    question: "Where is the correct place to insert a JavaScript",
    choice1: "Both the <head> section and the <body> section",
    choice2: "The < body > section",
    choice3: "The < head > section",
    choice4: "The < title > section",
    correct: "2",
  },
  {
    question: "How do you write 'You are the best!' in an alert box?",
    choice1: "msgBox('You are the best!');",
    choice2: "msg('You are the best!');",
    choice3: "alert('You are the best!')",
    choice4: "alertBox('You are the best!')",
    correct: "3",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "< javascript >",
    choice2: "< js >",
    choice3: "< scripting >",
    choice4: "< script >",
    correct: "4",
  },
];

//Variables
const lastQuestion = questions.length - 1;
let currentQuestion = 0;

//Render Questions, the app will render a question and 4 ans choices
function renderQuestion() {
  let q = questions[currentQuestion];
  question.innerHTML = q.question;
  choice1.innerHTML = q.choice1;
  choice2.innerHTML = q.choice2;
  choice3.innerHTML = q.choice3;
  choice4.innerHTML = q.choice4;
}
//Start Timer
function startTimer() {
  var secondsLeft = 60;
  var setTimer = setInterval(function function1() {
    timer.innerHTML = secondsLeft;
    secondsLeft -= 1;
    if (secondsLeft <= 0) {
      clearInterval(setTimer);
      timer.innerHTML = "Your time is up";
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(startTimer);
}
//Start Quiz
startBtn.addEventListener("click", startQuiz);
//After clicking start quiz a series of questions is displayed
function startQuiz() {
  intro.style.display = "none";
  startTimer();
  renderQuestion();
  quizEl.style.display = "block";
}

// //show progress
// function showProgress() {
//   var element = document.getElementById("progress");
//   if (element) {
//     answerIsCorrect = checkAnsChoice;
//     element.innerHTML = "correct";
//   }
// }

//Check Answers
function checkAnsChoice(answer) {
  if (answer == questions[currentQuestion].correct) {
    answerIsCorrect();
  } else {
    answerIsIncorrect();
  }

  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    stopTimer();
  }
}

function answerIsCorrect() {
  document.currentQuestion;
}
function answerIsIncorrect() {
  document.currentQuestion;
}
