// BMI Calculator - New Modified Version

function getBMICategory(bmiValue) {
    if (bmiValue < 18.5) {
        return "Underweight";
    } else if (bmiValue < 25) {
        return "Normal Range";
    } else if (bmiValue < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

function computeBMI(weightKg, heightMeters) {
    const bmi = weightKg / Math.pow(heightMeters, 2);
    return bmi.toFixed(2);
}

// Example values
let userWeight = 68;     // weight in kg
let userHeight = 1.70;   // height in meters

let bmiValue = computeBMI(userWeight, userHeight);
let bmiCategory = getBMICategory(bmiValue);

console.log("=== BMI ANALYSIS ===");
console.log(Weight: ${userWeight} kg);
console.log(Height: ${userHeight} m);
console.log(BMI: ${bmiValue});
console.log(Category: ${bmiCategory});
console.log("====================");