// # background.js
let navigationCount = 0;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    navigationCount++;
    
    // Trigger alert every 2-3 navigations
    if (navigationCount % 3 === 0) {
      chrome.storage.sync.get(['studyMaterials'], function(result) {
        if (result.studyMaterials && result.studyMaterials.length > 0) {
          // Randomly select a study material
          const materials = result.studyMaterials;
          const randomMaterial = materials[Math.floor(Math.random() * materials.length)];
          
          // Send a message to the active tab to show the alert
          chrome.tabs.sendMessage(tabId, {action: "showStudyAlert", material: randomMaterial});
        }
      });
    }
  }
});