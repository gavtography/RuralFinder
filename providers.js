function getResult(answers) {
  let provider = '';

  // Check if Verizon is available
  if (answers[0]) {
    // Check if Verizon provides a strong connection
    if (answers[3]) {
      provider = 'Verizon 5G Home Internet';
    } else {
      provider = 'Verizon 4G Home Internet or Visible sim card in an LTE router (if comfortable with workarounds)';
    }
  }
  // Check if T-Mobile is available
  else if (answers[1]) {
    // Check if T-Mobile provides a strong connection
    if (answers[4]) {
      provider = 'T-Mobile Home Internet or Calyx Institute Internet Membership';
    } else {
      provider = 'T-Mobile Home Internet or Calyx Institute Internet Membership';
    }
  }
  // Check if AT&T is available
  else if (answers[2]) {
    // Check if AT&T provides a strong connection
    if (answers[5]) {
      provider = 'non-unlimited AT&T fixed wireless';
    } else {
      provider = 'AT&T Business Wireless Essentials (if comfortable with workarounds)';
    }
  }
  // Check if Starlink is available
  else if (answers[6]) {
    provider = 'Starlink';
  }
  // If nothing is available, suggest Starlink RV and encourage the user to check the FCC Broadband Map
  else {
    provider = 'Starlink RV';
  }

  // Add a message if external antenna may be required
  if (!answers[3] || !answers[4] || !answers[5]) {
    provider += ' (LTE router with external antenna or external antenna modification to hardware may be required)';
  }

  return provider;
}
