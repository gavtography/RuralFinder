const quizForm = document.getElementById('quiz-form');
const nextButton = document.getElementById('next-button');

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    nextButton.removeAttribute('disabled');
    window.location.href = 'success.html';
  } else {
    alert('Please select an answer before continuing');
  }
});
