import { beginQuiz, nextQuestion, restartQuiz } from "./app.js";

document.getElementById("start-btn").onclick = beginQuiz;
document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("restart-btn").onclick = restartQuiz;