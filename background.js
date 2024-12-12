// # background.js
let navigationCount = 0;
// Set an alarm to run every 5 minutes
chrome.alarms.create("periodicTask", { periodInMinutes: 0.1 }); // 0.1 = 6 seconds for testing

// Listener for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "periodicTask") {
    console.log("Periodic task triggered at", new Date().toLocaleTimeString());
    
    // Perform your periodic task here
  }
});

// Listener for when a tab is created (new tab opened)
chrome.tabs.onCreated.addListener((tab) => {
  console.log(`New tab opened: ${tab.id}, adding to counter`);
  
});

// Listener for when a tab is updated (e.g., URL changes)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    console.log(`Tab ${tabId} updated to URL: ${changeInfo.url}`);
  }
});




// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (changeInfo.status === 'complete') {
//     navigationCount++;
    
//     // Trigger alert every 2-3 navigations
//     if (navigationCount % 3 === 0) {
//       chrome.storage.sync.get(['studyMaterials'], function(result) {
//         if (result.studyMaterials && result.studyMaterials.length > 0) {
//           // Randomly select a study material
//           const materials = result.studyMaterials;
//           const randomMaterial = materials[Math.floor(Math.random() * materials.length)];
          
//           // Send a message to the active tab to show the alert
//           chrome.tabs.sendMessage(tabId, {action: "showStudyAlert", material: randomMaterial});
//         }
//       });
//     }
//   }
// });