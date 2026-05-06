import { beginQuiz, nextQuestion, showQuestion, showResults } from "./app.js";

document.getElementById("start-btn").onclick = beginQuiz;
document.getElementById("next-btn").onclick = nextQuestion;