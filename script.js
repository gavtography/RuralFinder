const questions = [
  { question: "Question 1?", answer: null },
  { question: "Question 2?", answer: null },
  { question: "Question 3?", answer: null },
  { question: "Question 4?", answer: null },
  { question: "Question 5?", answer: null },
  { question: "Question 6?", answer: null }
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const progress = document.getElementById("progress");
const resultText = document.getElementById("result-text");
const survey = document.getElementById("survey");
const result = document.getElementById("result");

function showQuestion() {
  const question = questions[currentQuestion];
  questionText.innerText = question.question;
  yesBtn.addEventListener("click", () => {
    question.answer = true;
    nextQuestion();
  });
  noBtn.addEventListener("click", () => {
    question.answer = false;
    nextQuestion();
  });
}

function nextQuestion() {
  currentQuestion++;
  updateProgress();
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function updateProgress() {
  progress.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function showResult() {
  survey.style.display = "none";
  result.style.display = "block";
  const numCorrect = questions.filter(q => q.answer === true).length;
  resultText.innerText = `You got ${numCorrect} out of ${questions.length} correct!`;
}

showQuestion();

