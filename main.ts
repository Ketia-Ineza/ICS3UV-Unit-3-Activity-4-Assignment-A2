// Constants
const MIN_WEIGHT = 77.0;  // minimum allowed weight in kg
const MAX_WEIGHT = 105.0; // maximum allowed weight in kg

// Prompt user for their weight
const weight = Number(prompt("How much do you weigh?"));

// Check eligibility
if (weight >= MIN_WEIGHT && weight <= MAX_WEIGHT) {
  console.log("You may enter the contest.");
} else {
  console.log("You may NOT enter the contest.");
}