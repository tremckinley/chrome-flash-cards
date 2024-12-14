document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("studyMaterials");
  const saveButton = document.getElementById("saveButton");

  // Function to retrieve value from chrome.storage.local
  async function getValue(key) {
    const result = await chrome.storage.local.get(key);
    return result[key];
  }

  // Function to store data in chrome.storage.local
  async function storeData(key, value) {
    try {
      await chrome.storage.local.set({ [key]: value });
      console.log(`${key} set to ${value}`);
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
    }
  }

  // Load existing study materials into the textarea
  getValue("studyMaterials").then((storedValue) => {
    if (storedValue) {
      try {
        const materials = JSON.parse(storedValue);
        const currentArea = Object.values(materials).join("\n");
        textarea.value = currentArea.trim();
      } catch (error) {
        console.error("Error parsing study materials:", error);
        textarea.value = ""; // Reset textarea on error
      }
    } else {
      textarea.value = ""; // Empty textarea if no data
    }
  });

  // Save new study materials
  saveButton.addEventListener("click", function () {
    const materials = textarea.value.split("\n").filter(line => line.trim() !== "");
    const factgroup = materials.reduce((acc, material, index) => {
      acc[index] = material;
      return acc;
    }, {});

    storeData("studyMaterials", JSON.stringify(factgroup));
    alert("Study materials saved!");
  });
});
