const questions = [
  {
    question: 'Do you have Verizon service available?',
    answers: ['Yes', 'No']
  },
  {
    question: 'Do you have T-Mobile service available?',
    answers: ['Yes', 'No']
  },
  {
    question: 'Do you have AT&T service available?',
    answers: ['Yes', 'No']
  },
  {
    question: 'Does this carrier provide a strong connection at your location?',
    answers: ['Yes', 'No']
  },
  {
    question: 'Do you have Starlink available?',
    answers: ['Yes', 'No']
  },
  {
    question: 'Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?',
    answers: ['Yes', 'No']
  }
];

const results = [
  {
    condition: answers => {
      return answers[0] === 'Yes' && answers[5] === 'No';
    },
    result: 'Verizon 4G or Verizon 5G Home Internet'
  },
  {
    condition: answers => {
      return answers[0] === 'Yes' && answers[5] === 'Yes';
    },
    result: 'Verizon 4G Home Internet or a Visible sim card in an LTE router'
  },
  {
    condition: answers => {
      return answers[1] === 'Yes' && answers[5] === 'No';
    },
    result: 'T-Mobile Home Internet or Calyx Institute Internet Membership'
  },
  {
    condition: answers => {
      return answers[1] === 'Yes' && answers[5] === 'Yes';
    },
    result: 'T-Mobile Home Internet or Calyx Institute Internet Membership'
  },
  {
    condition: answers => {
      return answers[2] === 'Yes' && answers[5] === 'No';
    },
    result: 'Non-unlimited AT&T fixed wireless'
  },
  {
    condition: answers => {
      return answers[2] === 'Yes' && answers[5] === 'Yes';
    },
    result: 'AT&T Business Wireless Essentials'
  },
  {
    condition: answers => {
      return answers[3] === 'No';
    },
    result: 'LTE router with external antenna or external antenna modification to hardware may be required.\n\nStarlink'
  },
  {
    condition: answers => {
      return answers[4] === 'Yes' && answers[5] === 'No';
    },
    result: 'Starlink'
  },
  {
    condition: answers => {
      return answers[4] === 'Yes' && answers[5] === 'Yes';
    },
    result: 'Starlink'
  },
  {
    condition: answers => {
      return answers[0] === 'No' && answers[1] === 'No' && answers[2] === 'No' && answers[4] === 'No' && answers[5] === 'No';
    },
    result: 'Starlink RV.\n\nVisit the FCC Broadband Map to check other options.'
  },
  {
    condition: answers => {
      return answers[0] === 'No' && answers[1] === 'No' && answers[2] === 'No' && answers[4] === 'No' && answers[5] === 'Yes';
    },
    result: 'Starlink RV.\n\nVisit the FCC Broadband Map to check other options.'
  }
];
