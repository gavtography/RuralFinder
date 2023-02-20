// Load the questions from data.js
const questions = data.questions;

// Store the user's answers
const answers = {};

// Get HTML elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");

// Set up event listeners
nextButton.addEventListener("click", showNextQuestion);
submitButton.addEventListener("click", showResults);

// Display the first question
showQuestion(0);

function showQuestion(index) {
  // Display the question
  questionText.textContent = questions[index].question;

  // Display the answer choices
  choicesContainer.innerHTML = "";
  const choices = questions[index].choices;
  for (let i = 0; i < choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choices[i];
    choiceButton.classList.add("choice");
    choiceButton.addEventListener("click", () => selectAnswer(index, i));
    choicesContainer.appendChild(choiceButton);
  }

  // Disable the Next button until an answer is selected
  nextButton.disabled = true;
}

function showNextQuestion() {
  // Find the index of the next unanswered question
  const index = questions.findIndex((q, i) => !answers[i]);

  if (index !== -1) {
    // Display the next question
    showQuestion(index);
  } else {
    // All questions have been answered
    showResults();
  }
}

function selectAnswer(questionIndex, answerIndex) {
  // Store the selected answer
  answers[questionIndex] = answerIndex;

  // Enable the Next button
  nextButton.disabled = false;
}

function showResults() {
  // Determine the result based on the answers
  let result = null;
  if (answers[0] !== undefined || answers[1] !== undefined || answers[2] !== undefined) {
    // At least one of the first three questions was answered "Yes"
    const carrier = getCarrierWithStrongConnection();
    if (carrier) {
      result = getNonWorkaroundResult(carrier);
    } else {
      result = getWorkaroundResult();
    }
  } else {
    // None of the first three questions were answered "Yes"
    const starlinkAvailable = Boolean(answers[3]);
    if (starlinkAvailable) {
      result = getStarlinkResult();
    } else {
      result = getNoOptionsResult();
    }
  }

  // Store the result in session storage and redirect to the results page
  sessionStorage.setItem("result", result);
  window.location.href = "result.html";
}

function getCarrierWithStrongConnection() {
  if (answers[0] === 0 && answers[4] !== 1) {
    return "Verizon";
  } else if (answers[1] === 0 && answers[4] !== 1) {
    return "T-Mobile";
  } else if (answers[2] === 0 && answers[4] !== 1) {
    return "AT&T";
  } else {
    return null;
  }
}

function getNonWorkaroundResult(carrier) {
  switch (carrier) {
    case "verizon":
      return "Verizon 4G or Verizon 5G Home Internet";
    case "tmobile":
      return "T-Mobile Home Internet or Calyx Institute Internet Membership";
    case "att":
      return "Non-unlimited AT&T fixed wireless";
    default:
      return null;
  }
}

function getWorkaroundResult(carrier) {
  switch (carrier) {
    case "verizon":
      return "Verizon 4G Home Internet or a Visible sim card in an LTE router";
    case "tmobile":
      return "T-Mobile Home Internet or Calyx Institute Internet Membership";
    case "att":
      return "AT&T Business Wireless Essentials";
    default:
      return null;
  }
}

function showResult() {
  // Get the user's answers
  const verizon = document.querySelector('input[name="verizon"]:checked').value === "yes";
  const tmobile = document.querySelector('input[name="tmobile"]:checked').value === "yes";
  const att = document.querySelector('input[name="att"]:checked').value === "yes";
  const verizonConnection = document.querySelector('input[name="verizon-connection"]:checked').value === "yes";
  const tmobileConnection = document.querySelector('input[name="tmobile-connection"]:checked').value === "yes";
  const attConnection = document.querySelector('input[name="att-connection"]:checked').value === "yes";
  const starlink = document.querySelector('input[name="starlink"]:checked').value === "yes";
  const workaround = document.querySelector('input[name="workaround"]:checked').value === "yes";

  let carrier;
  let connection;
  let result;

  if (verizon && verizonConnection) {
    carrier = "verizon";
    connection = "yes";
  } else if (tmobile && tmobileConnection) {
    carrier = "tmobile";
    connection = "yes";
  } else if (att && attConnection) {
    carrier = "att";
    connection = "yes";
  } else if (starlink) {
    result = "Starlink";
  } else {
    result = "Starlink RV. Visit the FCC Broadband Map to check for other options.";
  }

  if (carrier && connection) {
    if (workaround) {
      result = getWorkaroundResult(carrier);
    } else {
      result = getNonWorkaroundResult(carrier);
    }

    if (result === "Non-unlimited AT&T fixed wireless.") {
      const additionalText = "LTE router with external antenna or external antenna modification to hardware may be required";
      result += " " + additionalText;
    }
  }

  // Redirect to the result page with the result in the query string
  const queryString = `?result=${encodeURIComponent(result)}`;
  const url = window.location.href.replace("index.html", "result.html") + queryString;
  window.location.href = url;
}

// Set up the click handler for the submit button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", showResult);

