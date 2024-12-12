// # content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "showStudyAlert") {
    alert("Study Reminder: " + request.material);
  }
});
