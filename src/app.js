import questions from "./questions";    

let currentQuestionIndex = 0;
let currentScore = 0;

function beginQuiz() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  questions.sort(() => Math.random() - 0.5);

  currentQuestionIndex = 0;
  currentScore = 0;
}