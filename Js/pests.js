const pestContainer = document.getElementById("pestContainer");
let pestData = [];

// Fetch your pest data matrix
fetch("data/pests.json")
  .then(response => response.json())
  .then(data => {
    pestData = data;
    displayPests(data);
  })
  .catch(error => console.error("Error loading pest data:", error));

// Display pest profiles on the UI card grid
function displayPests(items) {
  pestContainer.innerHTML = "";

  items.forEach(item => {
    // FIXED: Maps to item.link dynamically. Fallbacks to a Google search if missing.
    const externalLink = item.link ? item.link : `https://www.google.com/search?q=${encodeURIComponent(item.name)}+pest+control+advice`;

    pestContainer.innerHTML += `
      <div class="crop-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="crop-content">
          <h3>${item.name}</h3>
          
          <p>
            <strong>Symptoms:</strong><br>
            ${item.symptoms}
          </p>
          
          <p>
            <strong>Treatment:</strong><br>
            ${item.treatment}
          </p>

          <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="read-more-btn" style="display: inline-block; margin-top: 10px;">
            Read More
          </a>
        </div>
      </div>
    `;
  });
}

// Pest search filter logic
document.getElementById("pestSearch").addEventListener("keyup", function() {
  const search = this.value.toLowerCase();
  const filtered = pestData.filter(item =>
    item.name.toLowerCase().includes(search)
  );
  displayPests(filtered);
});