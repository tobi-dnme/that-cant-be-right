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
    button.onclick = () => {checkAnswer(i)};
  
    optionsContainer.appendChild(button);
  }
}

const checkAnswer = (index) => {
  const myQuestion = questions[currentQuestionIndex];

  if (index === myQuestion.answer) {
    currentScore++;
    document.getElementById("feedback").textContent = "You're WRONG, but that's the right answer!";
  } else {
    document.getElementById("feedback").textContent = "You're RIGHT, but that's the wrong answer!";
  }

  document.getElementById("next-btn").classList.remove("hidden");
};

export const nextQuestion = () => {
  currentQuestionIndex++;

  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").classList.add("hidden");

  if (currentQuestionIndex === questions.length) {
    showResults();
  } else {
    showQuestion();
  }

};

  const showResults = () => {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("score").textContent = (currentScore * 10) + "%";

  let comment = "";

  if (currentScore === 10) {
    comment = "You might actually be a genius!";
  } else if (currentScore >= 5) {
    comment = "Not bad, not bad at all.";
  } else {
    comment = "Better luck next time.";
  }
  

  document.getElementById("comment").textContent = comment;
};