// # popup.js
document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('studyMaterials');
  const saveButton = document.getElementById('saveButton');

  // Load existing materials
  localStorage.getItem(['studyMaterials']);

  // Save materials
  saveButton.addEventListener('click', function() {
    let factgroup = {}
    const materials = textarea.value.split('\n').filter(line => line.trim() !== '');
    for (let index = 0; index < materials.length; index++) {
      factgroup[index] = materials[index]
    }
    localStorage.setItem("studyMaterials", JSON.stringify(factgroup)) 
    alert('Study materials saved!');
  });
});