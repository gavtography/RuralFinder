const questions = [
    "Do you have Verizon service available?",
    "Do you have T-Mobile service available?",
    "Do you have AT&T service available?",
    "Do any one of those carriers provide a strong connection at your location?",
    "Do you have Starlink available?",
    "Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?",
];

const answers = [
    ["Yes", "No", "No", "Yes", "No", "No", "Verizon 5G Home Internet"],
    ["Yes", "No", "No", "Yes", "No", "Yes", "Verizon 5G Home Internet"],
    ["Yes", "No", "No", "No", "No", "Yes", "Verizon 4G Home Internet"],
    ["Yes", "No", "No", "No", "No", "Yes", "Visible with LTE router"],
    ["Yes", "No", "No", "No", "No", "Yes", "Visible with LTE router and external antenna"],
    ["Yes", "No", "No", "No", "Yes", "No", "Starlink"],
    ["Yes", "No", "No", "No", "Yes", "Yes", "Starlink"],
    ["No", "Yes", "No", "Yes", "No", "No", "T-Mobile Home Internet"],
    ["No", "Yes", "No", "Yes", "No", "Yes", "T-Mobile Home Internet"],
    ["No", "Yes", "No", "No", "No", "Yes", "Calyx Institute T-Mobile"],
    ["No", "Yes", "No", "No", "No", "Yes", "Calyx Institute T-Mobile"],
    ["No", "Yes", "No", "No", "Yes", "No", "Starlink"],
    ["No", "Yes", "No", "No", "Yes", "Yes", "Starlink"],
    ["No", "No", "Yes", "Yes", "No", "No", "AT&T Wireless (Not Unlimited)"],
    ["No", "No", "Yes", "Yes", "No", "Yes", "AT&T Wireless (Not Unlimited)"],
    ["No", "No", "Yes", "No", "No", "Yes", "AT&T Business Wireless Essentials"],
    ["No", "No", "Yes", "No", "No", "Yes", "Boost Mobile with LTE router AT&T"],
    ["No", "No", "Yes", "No", "No", "Yes", "Boost Mobile with LTE router with external antenna"],
    ["No", "No", "Yes", "No", "Yes", "No", "Starlink"],
    ["No", "No", "Yes", "No", "Yes", "Yes", "Starlink"],
    ["Yes", "No", "No", "No", "No", "No", "Verizon 4G Home Internet"],
    ["Yes", "No", "No", "No", "No", "No", "StraightTalk Home Internet Verizon"],
    ["No", "Yes", "No", "No", "No", "No", "T-Mobile Home Internet"],
    ["No", "Yes", "No", "No", "No", "No", "Calyx Institute T-Mobile"],
    ["No", "No", "Yes", "No", "No", "No", "AT&T Wireless (Not Unlimited)"],
    ["No", "No", "Yes", "No", "No", "No", "AT&T Business Wireless Essentials"],
    ["Yes", "No", "No", "No", "No", "Yes", "Starlink RV"],
    ["No", "Yes", "No", "No", "No", "Yes", "Starlink RV"],
    ["No", "No", "Yes", "No", "No", "Yes", "Starlink RV"],
    ["No", "No", "No", "No", "No", "No", "FCC Broadband Map"],
    ["No", "No", "No", "No", "No", "Yes", "FCC Broadband Map"],

];

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
