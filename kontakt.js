const form = document.querySelector('#contact');
const topic = form.elements.topic;
const admissionFields = document.querySelector('#admission-fields');
const feedback = document.querySelector('#feedback');

const requestedTopic = new URLSearchParams(window.location.search).get('thema');
if (['anmeldung', 'aufnahme'].includes(requestedTopic)) {
  topic.value = 'anmeldung';
}

function updateAdmissionFields() {
  const isAdmission = topic.value === 'anmeldung';
  admissionFields.hidden = !isAdmission;
  for (const input of admissionFields.querySelectorAll('input')) input.disabled = !isAdmission;
}

updateAdmissionFields();
topic.addEventListener('change', updateAdmissionFields);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = topic.selectedOptions[0].textContent;
  const lines = [
    'Name: ' + data.get('name'),
    'E-Mail: ' + data.get('email'),
    'Telefon: ' + data.get('phone')
  ];
  if (data.get('grade')) lines.push('Gewünschte Stufe: ' + data.get('grade'));
  if (data.get('year')) lines.push('Schuljahr: ' + data.get('year'));
  lines.push('', data.get('message'));
  feedback.textContent = 'Senden Sie die vorbereitete Nachricht in Ihrem E-Mail-Programm. Falls es sich nicht öffnet, können Sie die Verwaltung direkt über die E-Mail-Adresse oben erreichen.';
  window.location.href = 'mailto:' + form.dataset.recipient + '?subject='
    + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
});
form.querySelector('button').disabled = false;
