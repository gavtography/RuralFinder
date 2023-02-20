// Define the variables
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const buttonContainer = document.getElementById('button-container');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const additionalText = document.getElementById('additional-text');

// Define the initial state
let currentQuestion = 0;
let userAnswers = [];

// Define the questions and answers
const questions = [
  {
    question: 'Do you have Verizon service available?',
    followUp: true,
  },
  {
    question: 'Does this carrier provide a strong connection at your location?',
    followUp: false,
  },
  {
    question: 'Do you have T-Mobile service available?',
    followUp: true,
  },
  {
    question: 'Does this carrier provide a strong connection at your location?',
    followUp: false,
  },
  {
    question: 'Do you have AT&T service available?',
    followUp: true,
  },
  {
    question: 'Does this carrier provide a strong connection at your location?',
    followUp: false,
  },
  {
    question: 'Do you have Starlink available?',
    followUp: false,
  },
  {
    question: 'Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?',
    followUp: false,
  },
];

// Define the providers and their corresponding results
const providers = {
  'Verizon-Comfortable': 'Verizon 4G Home Internet or a Visible sim card in an LTE router',
  'Verizon-Uncomfortable': 'Verizon 4G or Verizon 5G Home Internet',
  'T-Mobile-Comfortable': 'T-Mobile Home Internet or Calyx Institute Internet Membership',
  'T-Mobile-Uncomfortable': 'T-Mobile Home Internet or Calyx Institute Internet Membership',
  'AT&T-Comfortable': 'AT&T Business Wireless Essentials',
  'AT&T-Uncomfortable': 'non-unlimited AT&T fixed wireless',
  'Starlink-Comfortable': 'Starlink',
  'Starlink-Uncomfortable': 'Starlink RV',
};

// Define the function to display the current question
function displayQuestion() {
  questionText.innerHTML = questions[currentQuestion].question;
  buttonContainer.style.display = 'flex';
}

// Define the function to handle the user's answer
function handleAnswer(answer) {
  userAnswers.push(answer);
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    if (questions[currentQuestion].followUp) {
      displayQuestion();
    } else {
      buttonContainer.style.display = 'none';
      displayResult();
    }
  } else {
    buttonContainer.style.display = 'none';
    displayResult();
  }
}

// Define the function to display the result
function displayResult() {
  let providerKey = '';
  let comfortLevel = '';
  let result = '';

  // Determine the provider and comfort level based on the user's answers
  if (userAnswers[0] === 'Yes') {
    if (userAnswers[1] === 'Yes') {
      providerKey = 'Verizon-Comfortable';
      comfortLevel = 'comfortable';
    } else if (userAnswers[1] === 'No') {
      providerKey = 'Verizon-Uncomfortable';
      comfortLevel = 'uncomfortable';
    }
  } else if (userAnswers[2] === 'Yes') {
    if (userAnswers[3] === 'Yes') {
      providerKey = 'T-Mobile-Comfortable';
      comfortLevel = 'comfortable';
    } else if (userAnswers[3] === 'No') {
      providerKey = 'T-Mobile-Uncomfortable';
      comfortLevel = 'uncomfortable';
    }
  } else if (userAnswers[4] === 'Yes') {
    if (userAnswers[5] === 'Yes') {
      providerKey = 'AT&T-Comfortable';
      comfortLevel = 'comfortable';
    } else if (userAnswers[5] === 'No') {
      providerKey = 'AT&T-Uncomfortable';
      comfortLevel = 'uncomfortable';
    }
  } else if (userAnswers[6] === 'Yes') {
    if (userAnswers[7] === 'Yes') {
      providerKey = 'Starlink-Comfortable';
      comfortLevel = 'comfortable';
    } else if (userAnswers[7] === 'No') {
      providerKey = 'Starlink-Uncomfortable';
      comfortLevel = 'uncomfortable';
    }
  }

  // Determine the result text based on the provider and comfort level
  if (providerKey !== '') {
    result = providers[providerKey];
    if (comfortLevel === 'uncomfortable') {
      additionalText.innerHTML = 'Note: It may be difficult to get a strong connection with this provider at your location.';
    }
  } else {
    result = "We're sorry, we could not find a suitable internet provider for you. Please contact your local government representative to advocate for improved internet access in your area.";
  }

  // Update the result container with the appropriate text
  resultContainer.style.display = 'block';
  resultText.innerHTML = result;
}
