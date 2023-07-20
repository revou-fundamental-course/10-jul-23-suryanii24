function calculateBMI() {
    // Get user input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Check if the inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid weight and height values.";
        return;
    }

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI based on gender
    let bmi;
    if (gender === "male") {
        bmi = weight / (heightInMeters * heightInMeters);
    } else if (gender === "female") {
        bmi = 0.9 * (weight / (heightInMeters * heightInMeters));
    } else {
        document.getElementById('result').innerHTML = "Please select a valid gender.";
        return;
    }


     

    // Display the result
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}
