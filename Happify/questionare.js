document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    document.getElementById('questionnaire-form').classList.add('hidden');
    document.getElementById('thank-you-message').classList.remove('hidden');
  });
  