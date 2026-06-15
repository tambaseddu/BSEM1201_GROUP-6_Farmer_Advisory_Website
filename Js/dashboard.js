/* ==========================================================================
   FARM ADVISORY CORE LOGIC LAYER (js/dashboard.js)
   ========================================================================== */

/**
 * Toggles the visibility state of the "Ask An Advisor" modal popup box.
 * @param {boolean} show - Dictates visibility target flag.
 */
function toggleHelpModal(show) {
    const modal = document.getElementById("helpDeskModal");
    if (modal) {
        modal.style.display = show ? "flex" : "none";
    }
}

/**
 * Processes advisor form input submissions, blocks complete browser refreshes,
 * and clears out the interface upon successful field ticket simulation logging.
 * @param {Event} event - Intercepted submit action variable.
 */
function handleAdvisorySubmission(event) {
    event.preventDefault(); // Stop standard window pipeline reloading
    
    const categoryEl = document.getElementById("caseCategory");
    const detailsEl = document.getElementById("caseDetails");
    
    if (!detailsEl || detailsEl.value.trim() === "") {
        alert("Please provide field observations before submitting.");
        return;
    }
    
    const categoryText = categoryEl ? categoryEl.options[categoryEl.selectedIndex].text : "General";
    
    // Dispatch system simulation feedback to user
    alert(`Diagnostic Ticket Logged Successfully!\n\nClassification: ${categoryText}\nStatus: Assigned to nearest agricultural extension officer in Sierra Leone.`);
    
    // Clear out old data properties and mask overlay window frame
    detailsEl.value = "";
    toggleHelpModal(false);
}

/**
 * Updates homepage contextual advisory content blocks by reading system clock states.
 */
function updateDynamicAdvisoryBanner() {
    const textNode = document.getElementById("dynamicAdvisoryText");
    const badgeNode = document.getElementById("advisoryBadge");
    if (!textNode || !badgeNode) return;

    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        textNode.innerText = "Morning Window: Perfect conditions for spraying organic treatments and logging soil irrigation parameters.";
        badgeNode.innerText = "Optimal Spray Time";
        badgeNode.style.backgroundColor = "#2e7d32";
    } else if (currentHour >= 12 && currentHour < 16) {
        textNode.innerText = "Midday Thermal Shift: Maximize shade installations and check ventilation setups to protect livestock from heat stress.";
        badgeNode.innerText = "Heat Caution Alert";
        badgeNode.style.backgroundColor = "#e65100";
    } else {
        textNode.innerText = "Evening Shift: Audit feed inventory sheds against ambient moisture. Double check boundary perimeter fences.";
        badgeNode.innerText = "Routine Oversight";
        badgeNode.style.backgroundColor = "#1565c0";
    }
}

/**
 * Asynchronous stream handles data ingestion requests targeting local storage blocks.
 */
function loadMetricStripCounters() {
    const updateCount = (id, count) => {
        const el = document.getElementById(id);
        if (el) el.innerText = count;
    };

    fetch("data/crops.json")
        .then(res => res.json())
        .then(data => updateCount("countCrops", data.length))
        .catch(() => updateCount("countCrops", "12")); // Safe offline fallback string

    fetch("data/livestock.json")
        .then(res => res.json())
        .then(data => updateCount("countLivestock", data.length))
        .catch(() => updateCount("countLivestock", "8")); // Safe offline fallback string

    fetch("data/pests.json")
        .then(res => res.json())
        .then(data => updateCount("countPests", data.length))
        .catch(() => updateCount("countPests", "6")); // Safe offline fallback string
}

/* ==========================================================================
   INITIALIZATION MANAGEMENT LAYER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Connect form submissions straight to local state processing handler
    const advisorForm = document.getElementById("advisorForm");
    if (advisorForm) {
        advisorForm.addEventListener("submit", handleAdvisorySubmission);
    }
    
    // Execute live structural interface computations
    updateDynamicAdvisoryBanner();
    loadMetricStripCounters();
});