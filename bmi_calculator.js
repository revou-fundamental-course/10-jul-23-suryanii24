document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

// Get the reset button element
const resetButton = document.querySelector('button[type="reset"]');

// Add an event listener to the reset button
resetButton.addEventListener('click', function() {
    resetForm();
});

function calculateBMI() {
    // Your existing calculateBMI() function
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

     let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "berat badan normal";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        bmiCategory = "kelebihan berat badan";
    } else {
        bmiCategory = "obesitas";
    }
 
    let bmiDesc;

    if (bmi < 18.5){
        bmiDesc ="Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal, Perbanyak asupan makanan bergizi dan konsultasikan dengan ahli gizi untuk peningkatan berat badan.";
    } else if (bmi >= 18.5 && bmi <24.9){
        bmiDesc ="Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat, Lanjutkan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.";
    } else if (bmi >= 24.9 && bmi < 29.9){
        bmiDesc ="Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal, Lakukan penyesuaian pola makan dan rutin berolahraga untuk menurunkan berat badan.";
    } else {
        bmiDesc ="Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal, Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.";
    }


     // Display the result
     document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
     document.getElementById('result-desc').innerHTML = `${bmiCategory}`;
     document.getElementById('p-1').innerText = `${bmiDesc}`;
}

function resetForm() {
    // Reset form fields to their initial values
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('gender').value = '';

    // Clear the result div
    document.getElementById('result').innerHTML = '';
}

