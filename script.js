const questionNumberElement = document.getElementById("questionNumber");
const questionTextElement = document.getElementById("questionText");
const yesButtonElement = document.getElementById("yesButton");
const noButtonElement = document.getElementById("noButton");
const countElement = document.getElementById("count");

let currentQuestionIndex = 0;
let count = 0;
let answers = "";

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionNumberElement.innerHTML = `Question ${currentQuestionIndex + 1}: `;
  questionTextElement.innerHTML = question.text;
}

function handleAnswer(answer) {
  questions[currentQuestionIndex].answer = answer;
  answers += answer ? "1" : "0";
  currentQuestionIndex++;
  count++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    const result = results[answers];
    window.location.href = `result.html?result=${encodeURIComponent(result)}`;
  }
}

yesButtonElement.addEventListener("click", () => handleAnswer(true));
noButtonElement.addEventListener("click", () => handleAnswer(false));

showQuestion();
countElement.innerHTML = `Question ${count} of 10`;
