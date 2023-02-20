function getBestProvider(answers) {
  const verizonAvailable = answers[0] === "yes" || answers[1] === "yes" || answers[2] === "yes";
  const tmobileAvailable = answers[1] === "yes";
  const attAvailable = answers[2] === "yes";
  const starlinkAvailable = answers[3] === "yes";
  const comfortableWithWorkarounds = answers[4] === "yes";

  if (verizonAvailable) {
    const verizonStrongConnection = answers[0] === "yes" && parseInt(answers[0], 10) >= 3;
    const verizonResult = comfortableWithWorkarounds ? "Verizon 4G Home Internet or a Visible sim card in an LTE router" : "Verizon 4G or Verizon 5G Home Internet";
    return verizonStrongConnection ? verizonResult : `${verizonResult}. LTE router with external antenna or external antenna modification to hardware may be required.`;
  }

  if (tmobileAvailable) {
    const tmobileStrongConnection = answers[1] === "yes" && parseInt(answers[1], 10) >= 3;
    const tmobileResult = comfortableWithWorkarounds ? "T-Mobile Home Internet or Calyx Institute Internet Membership" : "T-Mobile Home Internet or Calyx Institute Internet Membership";
    return tmobileStrongConnection ? tmobileResult : `${tmobileResult}. LTE router with external antenna or external antenna modification to hardware may be required.`;
  }

  if (attAvailable) {
    const attStrongConnection = answers[2] === "yes" && parseInt(answers[2], 10) >= 3;
    const attResult = comfortableWithWorkarounds ? "AT&T Business Wireless Essentials" : "non-unlimited AT&T fixed wireless";
    return attStrongConnection ? attResult : `${attResult}. LTE router with external antenna or external antenna modification to hardware may be required.`;
  }

  if (starlinkAvailable) {
    return "Starlink";
  }

  return "Starlink RV. Also suggest to visit the FCC Broadband Map to check their options.";
}
