// Import questions and providers objects from their respective files
import { questions } from './questions.js';
import { providers } from './providers.js';

// Select the DOM elements that will display the questions and results
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

// Initialize an empty array to store the user's answers
const answers = [];

// Function to render the next question in the questions object
function renderQuestion(index) {
  // Clear the question container
  questionContainer.innerHTML = '';

  // Create a new question element and append it to the question container
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.innerHTML = questions[index].question;
  questionContainer.appendChild(questionElement);

  // Create the answer options for the question and append them to the question element
  for (let i = 0; i < questions[index].answers.length; i++) {
    const answerElement = document.createElement('button');
    answerElement.innerHTML = questions[index].answers[i].text;
    answerElement.addEventListener('click', () => {
      // Add the user's answer to the answers array and render the next question or result
      answers.push(questions[index].answers[i].value);
      if (index < questions.length - 1) {
        renderQuestion(index + 1);
      } else {
        renderResult();
      }
    });
    questionElement.appendChild(answerElement);
  }
}

// Function to render the result of the quiz
function renderResult() {
  // Call the getResult function from providers.js and pass in the user's answers
  const result = getResult(answers);

  // Clear the question container and create a new result element
  questionContainer.innerHTML = '';
  const resultElement = document.createElement('div');
  resultElement.classList.add('result');
  resultElement.innerHTML = `We recommend the following rural internet provider: <strong>${result}</strong>`;
  questionContainer.appendChild(resultElement);
}

// Call the renderQuestion function with an initial index of 0 to start the quiz
renderQuestion(0);

