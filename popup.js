// # popup.js
document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('studyMaterials');
  const saveButton = document.getElementById('saveButton');

  // Load existing materials
  let currentValueObject = JSON.parse(localStorage["studyMaterials"]);
  let valueSize = Object.keys(currentValueObject).length
  if (valueSize == 0) {
    currentValueObject = ""
  };
  let currentArea = ""
  for (let index = 0; index < valueSize; index++) {
    currentArea += `${currentValueObject[index]} \n`
  }
  
  textarea.innerHTML = currentArea;

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