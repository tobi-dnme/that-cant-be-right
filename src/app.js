import questions from "./questions";    

let currentQuestionIndex = 0;
let currentScore = 0;

export const beginQuiz = () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");


  questions.sort(() => Math.random() - 0.5);

  currentQuestionIndex = 0;
  currentScore = 0;

  showQuestion();
};

const showQuestion = () => {
  const myQuestion = questions[currentQuestionIndex];

  const questionElement = document.getElementById("question");
  questionElement.textContent = myQuestion.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  for (let i = 0; i < myQuestion.options.length; i++) {

    const button = document.createElement("button");
    button.textContent = myQuestion.options[i];
    button.addEventListener("click", () => {
      if (i === myQuestion.answer) {
        currentScore++;
      }})
  
    optionsContainer.appendChild(button);
  }
}