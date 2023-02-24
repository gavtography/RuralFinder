const questions = [
	"Question 1: Do you like pizza?",
	"Question 2: Do you enjoy reading books?",
	"Question 3: Have you ever traveled to another country?",
	"Question 4: Do you like watching movies?",
	"Question 5: Do you enjoy playing video games?",
	"Question 6: Have you ever gone skydiving?"
];

let questionCounter = 0;

const questionDiv = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showQuestion() {
	if (questionCounter < questions.length) {
		questionDiv.innerHTML = questions[questionCounter];
	} else {
		questionDiv.innerHTML = "Success";
		document.getElementById("buttons").style.display = "none";
	}
}

function nextQuestion() {
	questionCounter++;
	showQuestion();
}

yesBtn.addEventListener("click", nextQuestion);
noBtn.addEventListener("click", nextQuestion);

showQuestion();
