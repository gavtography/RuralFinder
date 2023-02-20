const questions = [
  {
    question: 'Do you have Verizon service available?',
    type: 'yesno',
    followUp: 'Does this carrier provide a strong connection at your location?',
    provider: 'verizon',
  },
  {
    question: 'Do you have T-Mobile service available?',
    type: 'yesno',
    followUp: 'Does this carrier provide a strong connection at your location?',
    provider: 'tmobile',
  },
  {
    question: 'Do you have AT&T service available?',
    type: 'yesno',
    followUp: 'Does this carrier provide a strong connection at your location?',
    provider: 'att',
  },
  {
    question: 'Do you have Starlink available?',
    type: 'yesno',
    provider: 'starlink',
  },
  {
    question: 'Are you comfortable trying unofficial (but legal) workarounds to getting access to rural internet?',
    type: 'yesno',
  },
];
