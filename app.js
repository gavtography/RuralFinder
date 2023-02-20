const questions = [
  {
    text: 'Do you have Verizon service available?',
    followUp: true
  },
  {
    text: 'Do you have T-Mobile service available?',
    followUp: true
  },
  {
    text: 'Do you have AT&T service available?',
    followUp: true
  },
  {
    text: 'Do you have Starlink available?',
    followUp: false
  },
  {
    text: 'Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?',
    followUp: false
  }
];

let currentQuestionIndex = 0;
let answers = {};

const getNextQuestion = () => {
  return questions[currentQuestionIndex];
};

const handleButtonClick = (answer) => {
  answers[currentQuestionIndex] = answer;
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showCurrentQuestion();
  } else {
    showResult();
  }
};

const showCurrentQuestion = () => {
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const buttonContainer = document.getElementById('button-container');

  questionText.textContent = getNextQuestion().text;

  // Remove any existing buttons
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }

  // Add yes and no buttons
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.id = 'yes-button';
  yesButton.addEventListener('click', () => handleButtonClick('yes'));
  buttonContainer.appendChild(yesButton);

  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.id = 'no-button';
  noButton.addEventListener('click', () => handleButtonClick('no'));
  buttonContainer.appendChild(noButton);

  // If this question has a follow-up question, add a skip button
  const question = getNextQuestion();
  if (question.followUp) {
    const skipButton = document.createElement('button');
    skipButton.textContent = 'Skip';
    skipButton.id = 'skip-button';
    skipButton.addEventListener('click', () => handleButtonClick('skip'));
    buttonContainer.appendChild(skipButton);
  }
};

const showResult = () => {
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  const additionalText = document.getElementById('additional-text');

  const result = getProvider(answers);

  resultText.textContent = `Based on your answers, the best rural internet provider for you is ${result.name}.`;
  if (result.additionalText) {
    additionalText.textContent = result.additionalText;
  }

  resultContainer.style.display = 'block';
};

const start = () => {
  showCurrentQuestion();
};

start();
