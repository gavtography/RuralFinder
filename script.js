// get all radio buttons and next button
const radioButtons = document.querySelectorAll('input[type="radio"]');
const nextButton = document.querySelector('#next');

// add event listener to next button
nextButton.addEventListener('click', () => {
  // check if all questions have been answered
  if (isFormComplete()) {
    // generate result based on user input
    let result = "";
    const verizon = document.querySelector('input[name="verizon"]:checked').value;
    const tmobile = document.querySelector('input[name="tmobile"]:checked').value;
    const att = document.querySelector('input[name="att"]:checked').value;
    const starlink = document.querySelector('input[name="starlink"]:checked').value;
    const workarounds = document.querySelector('input[name="workarounds"]:checked').value;

    if (verizon === "yes" && workarounds === "no") {
      result = "Verizon 4G or Verizon 5G Home Internet.";
    } else if (verizon === "yes" && workarounds === "yes") {
      result = "Verizon 4G Home Internet or a Visible sim card in an LTE router.";
    } else if (tmobile === "yes" && workarounds === "no") {
      result = "T-Mobile Home Internet or Calyx Institute Internet Membership.";
    } else if (tmobile === "yes" && workarounds === "yes") {
      result = "T-Mobile Home Internet or Calyx Institute Internet Membership.";
    } else if (att === "yes" && workarounds === "no") {
      result = "Non-unlimited AT&T fixed wireless.";
    } else if (att === "yes" && workarounds === "yes") {
      result = "AT&T Business Wireless Essentials.";
    } else if (starlink === "yes" && workarounds === "no") {
      result = "Starlink.";
    } else if (starlink === "yes" && workarounds === "yes") {
      result = "Starlink.";
    } else if (starlink === "no" && workarounds === "no") {
      result = "Starlink RV. LTE router with external antenna or external antenna modification to hardware may be required. We suggest visiting the FCC Broadband Map to check your options.";
    } else if (starlink === "no" && workarounds === "yes") {
      result = "Starlink RV. We suggest visiting the FCC Broadband Map to check your options.";
    }

    // redirect to result page with the result in the URL parameter
    window.location.href = "result.html?result=" + encodeURIComponent(result);
  } else {
    // display error message if not all questions have been answered
    const error = document.querySelector('#error');
    error.style.display = "block";
  }
});

// function to check if all questions have been answered
function isFormComplete() {
  let complete = true;
  radioButtons.forEach((button) => {
    if (!button.checked) {
      complete = false;
    }
  });
  return complete;
}

