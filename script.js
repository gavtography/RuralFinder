// Define survey questions as an array of objects
const surveyQuestions = [
  {
    question: 'Do you have Verizon service available?',
    yesResult: ['Verizon 4G or 5G Home Internet'],
    noResult: []
  },
  {
    question: 'Do you have T-Mobile service available?',
    yesResult: ['T-Mobile Home Internet', 'Calyx Institute Internet Membership'],
    noResult: []
  },
  {
    question: 'Do you have AT&T service available?',
    yesResult: ['Non-unlimited AT&T fixed wireless', 'AT&T Business Wireless Essentials'],
    noResult: []
  },
  {
    question: 'Do any one of those carriers provide a strong connection at your location?',
    yesResult: [],
    noResult: ['LTE router with external antenna or external antenna modification to hardware may be required']
  },
  {
    question: 'Do you have Starlink available?',
    yesResult: ['Starlink'],
    noResult: []
  },
  {
    question: 'Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?',
    yesResult: ['Verizon 4G Home Internet', 'Visible sim card in an LTE router', 'T-Mobile Home Internet', 'Calyx Institute Internet Membership', 'AT&T Business Wireless Essentials', 'Starlink'],
    noResult: []
  }
];

// Set up survey variables
let questionIndex = 0;
let result = [];

// Get HTML elements
const questionElement = document.getElementById('question');
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');

// Function to display the next question
function displayNextQuestion() {
  // Get the next question
  const question = surveyQuestions[questionIndex].question;
  // Display the question text
  questionElement.textContent = question;
}

// Function to add a result to the result array and move to the next question
function addResultAndMoveToNextQuestion(resultToAdd) {
  // Add the result to the result array
  result = result.concat(resultToAdd);
  // Move to the next question
  questionIndex++;
  // If we have displayed all the questions, display the final result
  if (questionIndex >= surveyQuestions.length) {
    displayFinalResult();
  } else {
    // Display the next question
    displayNextQuestion();
  }
}

// Function to display the final result
function displayFinalResult() {
  let finalResult;
  if (result.includes('Starlink')) {
    if (result.includes('Verizon 4G Home Internet') || result.includes('Visible sim card in an LTE router') || result.includes('T-Mobile Home Internet') || result.includes('Calyx Institute Internet Membership') || result.includes('AT&T Business Wireless Essentials')) {
      finalResult = 'Starlink';
    } else {
      finalResult = 'Starlink RV. Also suggest to visit the FCC Broadband Map to check your options.';
    }
  } else {
    finalResult = result.join(', ');
    if (result.length === 0) {
      finalResult = 'No options found. Suggest to visit the FCC Broadband Map to check your options.';
    }
  }
  // Display the final result text
  questionElement.textContent = finalResult;
  // Hide the Yes and No buttons
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
}

// Event listener for Yes button
yesBtn.addEventListener("click", function() {
  // Check if a response has been selected
  if (!responseSelected) {
    alert("Please select a response before continuing");
    return;
  }
  
  // Check if this is the last question
  if (currentQuestionIndex === questions.length - 1) {
    showResult();
  } else {
    // Increment current question index and display the next question
    currentQuestionIndex++;
    displayQuestion();
  }
});

// Event listener for No button
noBtn.addEventListener("click", function() {
  // Check if a response has been selected
  if (!responseSelected) {
    alert("Please select a response before continuing");
    return;
  }
  
  // Check if this is the last question
  if (currentQuestionIndex === questions.length - 1) {
    showResult();
  } else {
    // Increment current question index and display the next question
    currentQuestionIndex++;
    displayQuestion();
  }
});

// Function to display the result based on the user's responses
function showResult() {
  let result;
  let response = responses[responses.length - 1];
  let verizon = responses.includes("verizon");
  let tMobile = responses.includes("tMobile");
  let att = responses.includes("att");
  let starlink = responses.includes("starlink");
  let workarounds = responses.includes("workarounds");
  let strongConnection = responses.includes("strongConnection");
  
  if (verizon) {
    if (workarounds) {
      result = "Verizon 4G Home Internet or Visible sim card in an LTE router";
    } else {
      result = "Verizon 4G or Verizon 5G Home Internet";
    }
  } else if (tMobile) {
    if (workarounds) {
      result = "T-Mobile Home Internet or Calyx Institute Internet Membership";
    } else {
      result = "T-Mobile Home Internet or Calyx Institute Internet Membership";
    }
  } else if (att) {
    if (workarounds) {
      result = "AT&T Business Wireless Essentials";
    } else {
      result = "non-unlimited AT&T fixed wireless";
    }
  } else if (starlink) {
    result = "Starlink";
  } else {
    result = "Starlink RV. Visit the FCC Broadband Map to check your options.";
  }
  
  if (!strongConnection) {
    result += " LTE router with external antenna or external antenna modification to hardware may be required";
  }
  
  // Hide the question and button elements
  question.style.display = "none";
  buttons.style.display = "none";
  
  // Display the result
  let resultElement = document.createElement("div");
  resultElement.classList.add("result");
  resultElement.textContent = result;
  container.appendChild(resultElement);
}
