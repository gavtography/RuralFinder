const questions = [
  {
    text: "Do you have Verizon service available?",
    yes: "Do you feel comfortable with workarounds?",
    no: "Do you have T-Mobile service available?"
  },
  {
    text: "Do you have T-Mobile service available?",
    yes: "Do you feel comfortable with workarounds?",
    no: "Do you have AT&T service available?"
  },
  {
    text: "Do you have AT&T service available?",
    yes: "Do you feel comfortable with workarounds?",
    no: "Does this carrier provide a strong connection at your location?"
  },
  {
    text: "Do any one of those carriers provide a strong connection at your location?",
    yes: "Do you have Starlink available?",
    no: "LTE router with external antenna or external antenna modification to hardware may be required."
  },
  {
    text: "Do you have Starlink available?",
    yes: "Do you feel comfortable with workarounds?",
    no: "Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?"
  },
  {
    text: "Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?",
    yes: "Starlink RV. Also suggest to visit the FCC Broadband Map to check their options.",
    no: "Starlink RV. Also suggest to visit the FCC Broadband Map to check their options."
  }
];

const results = {
  "verizon-no-workarounds": "Verizon 4G or Verizon 5G Home Internet",
  "verizon-workarounds": "Verizon 4G Home Internet or a Visible sim card in an LTE router",
  "t-mobile-no-workarounds": "T-Mobile Home Internet or Calyx Institute Internet Membership",
  "t-mobile-workarounds": "T-Mobile Home Internet or Calyx Institute Internet Membership",
  "at&t-no-workarounds": "Non-unlimited AT&T fixed wireless",
  "at&t-workarounds": "AT&T Business Wireless Essentials",
  "starlink-no-workarounds": "Starlink",
  "starlink-workarounds": "Starlink"
};

function showResult() {
  const answerContainer = document.getElementById("answer-container");
  answerContainer.style.display = "none";
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  const resultText = document.getElementById("result-text");
  let result = "";

  const verizonAvailable = answers[0] === "yes";
  const tmobileAvailable = answers[1] === "yes";
  const attAvailable = answers[2] === "yes";
  const carrierHasStrongConnection = answers[3] === "yes";
  const starlinkAvailable = answers[4] === "yes";
  const comfortableWithWorkarounds = answers[5] === "yes";

  if (verizonAvailable) {
    if (comfortableWithWorkarounds) {
      result = results["verizon-workarounds"];
    } else {
      result = results["verizon-no-workarounds"];
    }
  } else if (tmobileAvailable) {
    if (comfortableWithWorkarounds) {
      result = results["t-mobile-workarounds"];
    } else {
      result = results["t-mobile-no-workarounds"];
    }
  } else if (attAvailable) {
    if (comfortableWithWorkarounds) {
      result = results["at&t-workarounds"];
    } else
