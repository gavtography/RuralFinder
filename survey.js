const questions = [
	"Question 1: Do you like pizza?",
	"Question 2: Have you ever been skydiving?",
	"Question 3: Do you prefer coffee or tea?",
	"Question 4: Are you afraid of spiders?",
	"Question 5: Have you ever traveled to another country?",
	"Question 6: Do you enjoy hiking?"
];

const answerButtons = document.querySelectorAll("button");
const questionText = document.getElementById("question-text");
const resultContainer = document.getElementById("result-container");
const additionalText = document.getElementById("additional-text");

let currentQuestion = 0;
let answers = [];

function showQuestion() {
	questionText.innerText = questions[currentQuestion];
}

function showResult() {
	resultContainer.style.display = "block";
	questionContainer.style.display = "none";

	let answerCount = answers.filter(answer => answer === "Yes").length;
	additionalText.innerText = `You answered yes to ${answerCount} questions out of 6.`;
}

function answerQuestion(event) {
	answers[currentQuestion] = event.target.id === "yes-button" ? "Yes" : "No";
	currentQuestion++;

	if (currentQuestion === questions.length) {
		showResult();
	} else {
		showQuestion();
	}
}

answerButtons.forEach(button => button.addEventListener("click", answerQuestion));

showQuestion();
