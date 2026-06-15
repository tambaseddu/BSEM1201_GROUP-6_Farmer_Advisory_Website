const livestockContainer = document.getElementById("livestockContainer");
let livestockData = [];

// Fetch your livestock data matrix
fetch("data/livestock.json")
  .then(response => response.json())
  .then(data => {
    livestockData = data;
    displayLivestock(data);
  })
  .catch(error => console.error("Error loading livestock data:", error));

// Display livestock profiles on the UI card grid
function displayLivestock(items) {
  livestockContainer.innerHTML = "";

  items.forEach(item => {
    // FIXED: Maps to item.link dynamically. Fallbacks to an automated Google search if the link is missing.
    const externalLink = item.link ? item.link : `https://www.google.com/search?q=${encodeURIComponent(item.name)}+livestock+management+advice`;

    livestockContainer.innerHTML += `
      <div class="crop-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="crop-content">
          <h3>${item.name}</h3>
          <p>${item.advice}</p>
          <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="read-more-btn">
            Read More
          </a>
        </div>
      </div>
    `;
  });
}

// Livestock search filter logic
document.getElementById("livestockSearch").addEventListener("keyup", function() {
  const search = this.value.toLowerCase();
  const filtered = livestockData.filter(item =>
    item.name.toLowerCase().includes(search)
  );
  displayLivestock(filtered);
});