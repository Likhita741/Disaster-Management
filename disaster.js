const form = document.getElementById('report-form');
const nameInput = document.getElementById('name');
const locationInput = document.getElementById('location');
const needsInput = document.getElementById('needs');
const reportsDiv = document.getElementById('reports');
function loadReports() {
  const reports = JSON.parse(localStorage.getItem('disasterReports')) || [];
  reportsDiv.innerHTML = '';
  reports.forEach(report => {
    const div = document.createElement('div');
    div.className = 'report-card';
    div.innerHTML = `
      <p><strong>Name:</strong> ${report.name}</p>
      <p><strong>Location:</strong> ${report.location}</p>
      <p><strong>Needs:</strong> ${report.needs}</p>
      <p><em>Reported at: ${new Date(report.timestamp).toLocaleString()}</em></p>
    `;
    reportsDiv.appendChild(div);
  });
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const report = {
    name: nameInput.value.trim(),
    location: locationInput.value.trim(),
    needs: needsInput.value.trim(),
    timestamp: Date.now()
  };
  const reports = JSON.parse(localStorage.getItem('disasterReports')) || [];
  reports.push(report);
  localStorage.setItem('disasterReports', JSON.stringify(reports));
  nameInput.value = '';
  locationInput.value = '';
  needsInput.value = '';
  loadReports();
});
loadReports();
