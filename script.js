// Get the DOM elements
const questionText = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer-button");
const submitButton = document.getElementById("submit-button");

// Set up the initial state
let currentQuestion = 0;
let answers = [];

// Load the questions from data.js
const questions = data.questions;

// Add event listeners to answer buttons
answerButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Save the answer and go to the next question
    answers.push(event.target.value === "yes");
    currentQuestion++;
    // If there are more questions, display the next question
    if (currentQuestion < questions.length) {
      showQuestion(questions[currentQuestion]);
    } else {
      // Otherwise, show the result
      showResult();
    }
  });
});

// Add event listener to submit button
submitButton.addEventListener("click", (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  // Start the questionnaire
  showQuestion(questions[currentQuestion]);
});

// Show a question
function showQuestion(question) {
  // Show the question text
  questionText.textContent = question.text;
  // Hide the result
  document.getElementById("result-container").classList.add("hidden");
  // Show the answer buttons
  answerButtons[0].textContent = question.yes;
  answerButtons[0].value = "yes";
  answerButtons[1].textContent = question.no;
  answerButtons[1].value = "no";
}

// Show the result
function showResult() {
  // Determine the result based on the answers
  const result = getResult(answers);
  // Show the result text
  const resultText = document.getElementById("result-text");
  resultText.textContent = result.text;
  // Show the additional text if necessary
  const additionalText = document.getElementById("additional-text");
  additionalText.textContent = result.additionalText || "";
  // Show the result container
  const resultContainer = document.getElementById("result-container");
  resultContainer.classList.remove("hidden");
  // Hide the question container
  questionText.textContent = "";
  answerButtons[0].textContent = "";
  answerButtons[1].textContent = "";
}

// Get the result based on the answers
function getResult(answers) {
  let result;
  if (answers[0] === true && !answers[4]) {
    if (answers[3] === true) {
      result = answers[1] === true ? data.results.verizonWorkaround : data.results.verizonNoWorkaround;
    } else {
      result = data.results.lteRouter;
    }
  } else if (answers[1] === true && !answers[4]) {
    if (answers[3] === true) {
      result = data.results.tMobile;
    } else {
      result = data.results.lteRouter;
    }
  } else if (answers[2] === true && !answers[4]) {
    if (answers[3] === true) {
      result = answers[1] === true ? data.results.attWorkaround : data.results.attNoWorkaround;
    } else {
      result = data.results.attFixed;
    }
  } else if (answers[3] === true) {
    result = data.results.starlink;
  } else {
    result = data.results.starlinkRV;
  }
  return result;
}
