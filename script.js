const questions = [
"Do you have Verizon LTE service available?",
"Do you have Verizon 5G service available?",
"Do you have Visible (Verizon MVNO) service available?",
"Do you have T-Mobile 4G or 5G service available?",
"Do you have AT&T Wireless service available?",
"Do you have AT&T DSL or Fiber service available?",
"Are you OK with purchasing unofficial but legal internet services?",
"Do you have a clear view of the northern sky for Starlink?"
];

const answers = [
["No", "No", "No", "No", "No", "No", "No", "No", "Starlink"],
["No", "No", "No", "No", "No", "No", "No", "Yes", "Starlink"],
["No", "No", "No", "No", "No", "Yes", "No", "No", "AT&T Internet Air (July 2023)"],
["No", "No", "No", "No", "No", "Yes", "No", "Yes", "AT&T Internet Air (July 2023) or Starlink"],
["No", "No", "No", "No", "Yes", "No", "No", "No", "No good options currently"],
["No", "No", "No", "No", "Yes", "No", "No", "Yes", "Starlink"],
["No", "No", "No", "No", "Yes", "Yes", "No", "No", "No good options currently"],
["No", "No", "No", "No", "Yes", "Yes", "No", "Yes", "Starlink"],
["No", "No", "No", "Yes", "No", "No", "No", "No", "T-Mobile Home Internet or Calyx Institute"],
["No", "No", "No", "Yes", "No", "No", "No", "Yes", "T-Mobile Home Internet or Calyx Institute or Starlink"],
["No", "No", "No", "Yes", "No", "Yes", "No", "No", "T-Mobile Home Internet or Calyx Institute or AT&T Internet Air (July 2023)"],
["No", "No", "No", "Yes", "No", "Yes", "No", "Yes", "T-Mobile Home Internet or Calyx Institute or AT&T Internet Air (July 2023) or Starlink"],
["No", "No", "No", "Yes", "Yes", "No", "No", "No", "T-Mobile Home Internet or Calyx Institute or AT&T Wireless"],
["No", "No", "No", "Yes", "Yes", "No", "No", "Yes", "T-Mobile Home Internet or Calyx Institute or AT&T Wireless or Starlink"],
["No", "No", "No", "Yes", "Yes", "Yes", "No", "No", "T-Mobile Home Internet or Calyx Institute or AT&T Wireless or AT&T Internet Air (July 2023)"],
["No", "No", "No", "Yes", "Yes", "Yes", "No", "Yes", "T-Mobile Home Internet or Calyx Institute or AT&T Wireless or AT&T Internet Air (July 2023) or Starlink"],
["No", "No", "Yes", "No", "No", "No", "No", "No", "Visible with LTE router"],
["No", "No", "Yes", "No", "No", "No", "No", "Yes", "Visible with LTE router or Starlink"],
["No", "No", "Yes", "No", "No", "Yes", "No", "No", "Visible with LTE router or AT&T Internet Air (July 2023)"],
["No", "No", "Yes", "No", "No", "Yes", "No", "Yes", "Visible with LTE router or AT&T Internet Air (July 2023) or Starlink"],
["No", "No", "Yes", "No", "Yes", "No", "No", "No", "Visible with LTE router or AT&T Wireless"],
["No", "No", "Yes", "No", "Yes", "No", "No", "Yes", "Visible with LTE router or AT&T Wireless or Starlink"],
["No", "No", "Yes", "No", "Yes", "Yes", "No", "No", "Visible with LTE router or AT&T Wireless or AT&T Internet Air (July 2023)"],
["No", "No", "Yes", "No", "Yes", "Yes", "No", "Yes", "Visible with LTE router or AT&T Wireless or AT&T Internet Air (July 2023) or Starlink"],
["No", "No", "Yes", "Yes", "No", "No", "No", "No", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute"],
["No", "No", "Yes", "Yes", "No", "No", "No", "Yes", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or Starlink"],
["No", "No", "Yes", "Yes", "No", "Yes", "No", "No", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or AT&T Internet Air (July 2023)"],
["No", "No", "Yes", "Yes", "No", "Yes", "No", "Yes", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or AT&T Internet Air (July 2023) or Starlink"],
["No", "No", "Yes", "Yes", "Yes", "No", "No", "No", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or AT&T Wireless"],
["No", "No", "Yes", "Yes", "Yes", "No", "No", "Yes", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or AT&T Wireless or Starlink"],
["No", "No", "Yes", "Yes", "Yes", "Yes", "No", "No", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or AT&T Wireless or AT&T Internet Air (July 2023)"],
["No", "No", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "Visible with LTE router or T-Mobile Home Internet or Calyx Institute or AT&T Wireless or AT&T Internet Air (July 2023) or Starlink"],
]

let currentQuestionIndex = 0;
let userAnswers = [];

const questionElement = document.querySelector(".question");
const answerElements = document.querySelectorAll(".answer");
const resultContainer = document.querySelector(".result-container");
const resultText = document.querySelector(".result");
const restartButton = document.querySelector(".restart");

function displayQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
}

function findBestOption() {
    for (let answer of answers) {
        let match = true;
        for (let i = 0; i < 6; i++) {
            if (answer[i] !== userAnswers[i]) {
                match = false;
                break;
            }
        }
        if (match) {
            return answer[6];
        }
    }
    return "FCC Broadband Map";
}

function showResult(result) {
    questionElement.parentNode.style.display = "none";
    resultText.textContent = result;
    resultContainer.style.display = "flex";
}

answerElements.forEach((answerElement) => {
    answerElement.addEventListener("click", () => {
        userAnswers[currentQuestionIndex] = answerElement.dataset.answer;
        currentQuestionIndex++;

        if (currentQuestionIndex === questions.length) {
            const bestOption = findBestOption();
            showResult(bestOption);
        } else {
            displayQuestion();
        }
    });
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    questionElement.parentNode.style.display = "flex";
    resultContainer.style.display = "none";
    displayQuestion();
});

displayQuestion();
