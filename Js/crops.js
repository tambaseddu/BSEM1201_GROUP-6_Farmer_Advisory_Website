const cropContainer = document.getElementById("cropContainer");
let cropData = [];

// Fetch your crop data matrix
fetch("data/crops.json")
  .then(response => response.json())
  .then(data => {
    cropData = data;
    displayCrops(data);
  })
  .catch(error => console.error("Error loading crop data:", error));

// Display crops on the UI grid
function displayCrops(crops) {
  cropContainer.innerHTML = "";

  crops.forEach(crop => {
    // FIXED: Turned the button into a stylized link pointing to crop.link
    // If a crop doesn't have a link, it defaults to a Google search for that crop
    const externalLink = crop.link ? crop.link : `https://www.google.com/search?q=${encodeURIComponent(crop.name)}+farming+advice`;

    cropContainer.innerHTML += `
      <div class="crop-card">
        <img src="${crop.image}" alt="${crop.name}">
        <div class="crop-content">
          <h3>${crop.name}</h3>
          <p>${crop.advice}</p>
          <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="read-more-btn">
            Read More
          </a>
        </div>
      </div>
    `;
  });
}

// Search filter logic
document.getElementById("searchInput").addEventListener("keyup", function() {
  const search = this.value.toLowerCase();
  const filtered = cropData.filter(crop => 
    crop.name.toLowerCase().includes(search)
  );
  displayCrops(filtered);
});