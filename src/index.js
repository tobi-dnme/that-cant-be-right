import { beginQuiz, nextQuestion, restartQuiz } from "./app.js";

/*Linking app.js functions to their corresponding HTML buttons*/
document.getElementById("start-btn").onclick = beginQuiz;
document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("restart-btn").onclick = restartQuiz;