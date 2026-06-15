// Select all elements containing the class hook 'slide'
//const slides = document.querySelectorAll(".slide");
//let currentSlideIndex = 0;
//const slideIntervalTime = 4000; // 4 seconds duration loop

//function changeHeroSlide() {
    // 1. Strip the active status visibility tracking class from the old photo target
    //slides[currentSlideIndex].classList.remove("active");

    // 2. Safely increment the tracker index layout, wrapping around smoothly
    //currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // 3. Inject the active visibility status tracking class onto the new target element
   // slides[currentSlideIndex].classList.add("active");
//}

// Initialize the execution loop timer
//setInterval(changeHeroSlide, slideIntervalTime);ss



const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlideIndex = 0;
let sliderTimer;

function updateSlidePosition(newIndex) {
    // 1. Remove active class from currently showing slide
    slides[currentSlideIndex].classList.remove("active");
    
    // 2. Set index to the newly targeted slide
    currentSlideIndex = newIndex;
    
    // 3. Add active class to show new slide
    slides[currentSlideIndex].classList.add("active");
}

function nextSlide() {
    // Wrap back to 0 if we exceed the array length
    let index = (currentSlideIndex + 1) % slides.length;
    updateSlidePosition(index);
}

function prevSlide() {
    // Wrap around to the last slide if we go below 0
    let index = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlidePosition(index);
}

// Reset the 4-second auto-timer whenever a user clicks manually
function resetAutoCycle() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 4000);
}

// Event Listeners for Manual Control Buttons
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoCycle();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoCycle();
});

// Start the automatic cycle on initial page load
sliderTimer = setInterval(nextSlide, 4000);