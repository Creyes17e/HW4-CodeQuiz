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
    question: "Var is used to delcare the ___ in Javascript?",

    choice1: "various",
    choice2: "variable",
    choice3: "print.option",
    choice4: "array",
    correct: "2",
  },
];

//Variables
const lastQ = questions.length - 1;
let currentQ = 0;

//Render Questions
function renderQuestion() {
  let q = questions[currentQ];
  question.innerHTML = q.question;
  choice1.innerHTML = q.choice1;
  choice2.innerHTML = q.choice2;
}
//Start Quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  intro.style.display = "none";
  renderQuestion();
  quizEl.style.display = "block";
}

//Start Timer

startBtn.addEventListener("click", startTimer);
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
// startBtn.addEventListener("click", startBtn);
// function startQuiz() {
//   startBtn.classList.add("hide");
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
//   quizEl.classList.remove("hide");
// }
