const quizForm = document.getElementById("quiz-form");
const nextButton = document.getElementById("next-button");
const quizQuestionsContainer = document.getElementById("quiz-questions");

let currentQuestionIndex = 0;

function showQuizQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  const questionText = currentQuestion.question;

  const answersHtml = currentQuestion.answers
    .map(
      (answer) =>
        `<label>
           <input type="radio" name="answer" value="${answer.value}">
           ${answer.text}
         </label>`
    )
    .join("");

  quizQuestionsContainer.innerHTML = `
    <div class="quiz-question">
      <h2>${questionText}</h2>
      ${answersHtml}
    </div>
  `;
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuizQuestion();
    nextButton.setAttribute("disabled", true);
  } else {
    // Show quiz results
    window.location.href = "results.html";
  }
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    nextButton.removeAttribute("disabled");
    showNextQuestion();
  } else {
    alert("Please select an answer before continuing");
  }
});

showQuizQuestion();
