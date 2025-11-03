// --- 1. State Variable ---
let clickCount = 0;

// --- 2. DOM References (getElementById) ---
// Note: These references will execute once the HTML loads.
const countElement = document.getElementById("count-display");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");

// --- 3. Core Logic Function (Conditional Logic & Style Property Change) ---
function updateCountDisplay() {
  // Update the prominent display text (textContent manipulation)
  countElement.textContent = clickCount;

  // Requirement: Change background color based on count (style property changes + conditional logic)
  if (clickCount >= 10) {
    // Goal achieved: Green
    document.body.style.backgroundColor = "#10b981"; // Emerald Green
  } else if (clickCount < 0) {
    // Below zero: Red
    document.body.style.backgroundColor = "#ef4444"; // Red
  } else {
    // Neutral: Gray
    document.body.style.backgroundColor = "#e5e7eb"; // Default Gray
  }
}

// --- 4. Event Listeners (addEventListener for all three buttons) ---

// Increment Logic
incrementButton.addEventListener("click", () => {
  clickCount++;
  updateCountDisplay();
});

// Decrement Logic
decrementButton.addEventListener("click", () => {
  clickCount--;
  updateCountDisplay();
});

// Reset Logic
resetButton.addEventListener("click", () => {
  clickCount = 0;
  updateCountDisplay();
});

// Initial display update to set the default count and color
updateCountDisplay();
