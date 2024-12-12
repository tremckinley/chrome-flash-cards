// # popup.js
document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('studyMaterials');
  const saveButton = document.getElementById('saveButton');

  // Load existing materials
  chrome.storage.sync.get(['studyMaterials'], function(result) {
    if (result.studyMaterials) {
      textarea.value = result.studyMaterials.join('\n');
    }
  });

  // Save materials
  saveButton.addEventListener('click', function() {
    const materials = textarea.value.split('\n').filter(line => line.trim() !== '');
    chrome.storage.sync.set({studyMaterials: materials}, function() {
      alert('Study materials saved!');
    });
  });
});