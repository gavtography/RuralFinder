// Array of questions
const questions = [  "Do you have Verizon service available?",  "Do you have T-Mobile service available?",  "Do you have AT&T service available?",  "Do any one of those carriers provide a strong connection at your location?",  "Do you have Starlink available?",  "Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?"];

// Array of possible results
const results = [  "Verizon 4G or Verizon 5G Home Internet",  "Verizon 4G Home Internet or a Visible sim card in an LTE router",  "T-Mobile Home Internet or Calyx Institute Internet Membership",  "T-Mobile Home Internet or Calyx Institute Internet Membership",  "non-unlimited AT&T fixed wireless",  "AT&T Business Wireless Essentials",  "LTE router with external antenna or external antenna modification to hardware may be required",  "Starlink",  "Starlink",  "Starlink RV. Please check the FCC Broadband Map for other options.",  "Starlink RV. Please check the FCC Broadband Map for other options."];

// Array of requirements for each result
const requirements = [  ["Verizon"], // Requires Verizon service
  ["Verizon"], // Requires Verizon service
  ["T-Mobile"], // Requires T-Mobile service
  ["T-Mobile"], // Requires T-Mobile service
  ["AT&T"], // Requires AT&T service
  ["AT&T"], // Requires AT&T service
  [], // No specific requirements
  ["Starlink"], // Requires Starlink service
  ["Starlink"], // Requires Starlink service
  [], // No specific requirements
  [] // No specific requirements
];

// Current question number
let currentQuestion = 0;

// User's answers
let answers = [];

// Get necessary elements
const questionText = document.getElementById("question");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resultText = document.getElementById("result");

// Function to display next question
function displayNextQuestion() {
  // Display current question
  questionText.innerText = questions[currentQuestion];
}

// Function to handle answer selection
function handleAnswerSelection(answer) {
  // Add answer to answers array
  answers.push(answer);
  // If last question, display result
  if (currentQuestion === questions.length - 1) {
    // Determine result based on answers
    let result = "Result not found";
    for (let i = 0; i < results.length; i++) {
      if (requirements[i].every(r => answers.includes(r))) {
        result = results[i];
        break;
      }
    }
    // Add extra text if required
    if (!answers[3]) {
      result += " LTE router with external antenna or external antenna modification to hardware may be required.";
    }
    // Display result
    resultText.innerText = result;
    // Hide buttons
    yesButton.style.display = "none";
    noButton.style.display = "none";
  } else {
    // Increment current question
    currentQuestion++;
    // Display next question
    displayNextQuestion();
  }
}

// Add event listeners to buttons
yesButton.addEventListener("click", () => handleAnswerSelection(requirements[currentQuestion][0]));
noButton.addEventListener("click", () => handleAnswerSelection(""));

// Display first question
displayNextQuestion();
