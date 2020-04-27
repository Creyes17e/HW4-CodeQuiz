//Variables
const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");
// const quizEl = document.getElementById("quizEl");

//Start Quiz
// startBtn.addEventListener("click", startBtn);
// function startQuiz() {
//   startBtn.classList.add("hide");
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
//   quizEl.classList.remove("hide");
// }

// startBtn.addEventListener("click", function()
// {

// });

//Timer
startBtn.addEventListener("click", function () {
  var secondsLeft = 60;
  const setTimer = setInterval(function function1() {
    countdown.innerHTML = secondsLeft;
    secondsLeft -= 1;
    if (secondsLeft <= 0) {
      clearInterval(setTimer);
      countdown.innerHTML = "Your time is up";
      // return secondsLeft;
      //only if they click start quiz again
    }
  }, 1000);
});

console.log("setTime");
console.log("startBtn");
console.log("setTimer");
