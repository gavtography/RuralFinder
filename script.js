// Questionnaire questions and answers
const questions = [
	{
		text: "Do you have Verizon service available?",
		followup: "Does this carrier provide a strong connection at your location?"
	},
	{
		text: "Do you have T-Mobile service available?",
		followup: "Does this carrier provide a strong connection at your location?"
	},
	{
		text: "Do you have AT&T service available?",
		followup: "Does this carrier provide a strong connection at your location?"
	},
	{
		text: "Do you have Starlink available?"
	},
	{
		text: "Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?"
	}
];

const answers = {
	verizon: {
		yes: {
			noWorkaround: "Verizon 4G or Verizon 5G Home Internet",
			workaround: "Verizon 4G Home Internet or a Visible sim card in an LTE router"
		},
		no: {
			message: "Verizon 4G or Verizon 5G Home Internet with an LTE router and external antenna modification may be required"
		}
	},
	tmobile: {
		yes: {
			noWorkaround: "T-Mobile Home Internet or Calyx Institute Internet Membership",
			workaround: "T-Mobile Home Internet or Calyx Institute Internet Membership"
		},
		no: {
			message: "T-Mobile Home Internet or Calyx Institute Internet Membership with an LTE router and external antenna modification may be required"
		}
	},
	att: {
		yes: {
			noWorkaround: "non-unlimited AT&T fixed wireless",
			workaround: "AT&T Business Wireless Essentials"
		},
		no: {
			message: "non-unlimited AT&T fixed wireless with an LTE router and external antenna modification may be required"
		}
	},
	starlink: {
		yes: {
			noWorkaround: "Starlink",
			workaround: "Starlink"
		},
		no: {
			message: "Starlink RV. Visit the FCC Broadband Map to check other options."
		}
	}
};

// DOM elements
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const buttonContainer = document.getElementById("button-container");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const additionalText = document.getElementById("additional-text");

// Helper functions
function hideElement(element) {
	element.style.display = "none";
}

function showElement(element) {
	element.style.display = "block";
}

function setResult(result) {
	resultText.innerText = result;
	showElement(resultContainer);
}

function handleAnswer(answer) {
	if (currentQuestion === 0) {
		if (answer === "yes") {
			showElement(questionContainer);
			questionText.innerText = questions[currentQuestion].followup;
			currentQuestion++;
		} else {
			setResult(answers.starlink.no.message);
		}
	} else if (currentQuestion === questions.length - 1) {
		if (answer === "yes") {
			setResult(answers.starlink.workaround);
		} else {
			setResult(answers.starlink.noWorkaround);
		}
	} else {
		if (answer === "yes") {
			showElement(questionContainer);
			questionText.innerText = questions[currentQuestion].followup;
		}
function getResult() {
  let result;
  if (verizonAvailable && !comfortableWithWorkarounds) {
    result = "Verizon 4G or Verizon 5G Home Internet";
  } else if (verizonAvailable && comfortableWithWorkarounds) {
    result = "Verizon 4G Home Internet or a Visible sim card in an LTE router";
  } else if (tmobileAvailable && !comfortableWithWorkarounds) {
    result = "T-Mobile Home Internet or Calyx Institute Internet Membership";
  } else if (tmobileAvailable && comfortableWithWorkarounds) {
    result = "T-Mobile Home Internet or Calyx Institute Internet Membership";
  } else if (attAvailable && !comfortableWithWorkarounds) {
    result = "non-unlimited AT&T fixed wireless";
  } else if (attAvailable && comfortableWithWorkarounds) {
    result = "AT&T Business Wireless Essentials";
  } else if (starlinkAvailable) {
    result = "Starlink";
  } else {
    result = "Starlink RV. Also suggest to visit the FCC Broadband Map to check their options.";
  }
  if (!strongConnection) {
    result += " LTE router with external antenna or external antenna modification to hardware may be required";
  }
  return result;
}

function showResult() {
  const result = getResult();
  const resultElement = document.getElementById("result");
  resultElement.innerText = result;
  resultElement.style.display = "block";
  document.getElementById("question-form").style.display = "none";
}
