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
const scoreDiv = document.getElementById("scoreDiv");
const highScoreSubmit = document.getElementById("highscores-submit");

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
var secondsLeft = 60;
var setTimer;
var score = 0;

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
var setTimer;
function startTimer() {
  timer.innerHTML = secondsLeft;
  setTimer = setInterval(function () {
    secondsLeft -= 1;
    timer.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(setTimer);
      timer.innerHTML = "Your time is up";
      quizEnds();
    } else if (secondsLeft <= 0) {
      clearInterval(setTimer);
      timer.innerHTML = "Your time is up";
      quizEnds();
    }
  }, 1000);
}

//Start Quiz
startBtn.addEventListener("click", startQuiz);
//After clicking start quiz a series of questions is displayed
function startQuiz() {
  startTimer();
  intro.style.display = "none";
  quizEl.style.display = "block";
  renderQuestion();
}

//Check Answers
function checkAnsChoice(answer) {
  if (answer == questions[currentQuestion].correct) {
    answerIsCorrect();
    score++;
    console.log(score);
  } else {
    answerIsIncorrect;
    secondsLeft = secondsLeft - 15;
  }

  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    clearTimeout(setTimer);
    quizEnds();
  }
}
//Answer is correct or incorrect functions
function answerIsCorrect() {
  document.currentQuestion;
}
function answerIsIncorrect() {
  document.currentQuestion;
}

//Quiz Ends
function quizEnds() {
  scoreDiv.innerHTML = "Your Score:" + "" + score;
  quizEl.style.display = "none";
  scoreDiv.style.display = "block";
  highScoreSubmit.style.display = "block";
}

//Store High Scores

//Highscores display in different HTML

// document.getElementById("user-initials").innerHTML = sessionStorage.getItem(
//   "textvalue"
// );
var initials = document.querySelector("#name-initials");
var yourScore = document.querySelector("#your-score");
var submitBtn = document.querySelector("#submit-btn");
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");
var userScoresSpan = document.querySelector("#user-score");
var score = 0;

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var user = {
    nameInitials: initials.value.trim(),
    userScore: yourScore.value.trim(),
  };
  console.log(user);

  //Validate the field
  if (user.nameInitials === "" || user.userScore != score) {
    displayMessage(
      "error",
      "You are receiving this error because name initials cannot be blank or your are inputting the incorrect score"
    );
  } else {
    displayMessage("success", "Your highscore has been saved");
    console.log(initials);
    console.log(score);

    //New Highscore Submission
    localStorage.setItem("user", JSON.stringify(user));

    //Most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));

    userInitialsSpan.textContent = lastUser.nameInitials;
    userScoresSpan.textContent = lastUser.userScore;
  }
});

//1ST CODE

// function displayScores() {
//   form = display.getElementById("highscore-list");
//   form.submit();
//   form.action = "highscores.html";
//   form.target = "";
// }

//  var user = {
//    nameInitials: initials.value,
//  };
