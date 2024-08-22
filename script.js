function calcbmi(){
    const weight = document.querySelector('.wi').value;
    const heightcm = document.querySelector('.hi').value;

    const heightM = heightcm/100;
    
    const bmi = weight/(heightM*heightM);
    
    const resultDiv = document.querySelector('.BMIResult');
    
    const res = document.querySelector('.resu');  

    if(bmi<=18.5){
        res.textContent = 'UnderWeight';
        
    }
    else if(bmi>18.5 && bmi<24.9){
        res.textContent = 'Healthy Weight :)';
        
    }
    else if(bmi>25 && bmi<29.5){
        res.textContent = 'Overweight';
    }
    else if(bmi>30 && bmi<34.9){
        res.textContent = 'Obese';
    }
    else if(bmi>35 && bmi<39.5){
        res.textContent = 'Class 2 Obesity';
    }
    else if(bmi>=39.5){
        
        res.textContent = 'Severe Obesity';
        
    }
    
    if (weight > 0 && heightM > 0) {
        // Display the BMI result, rounded to 2 decimal places
        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    } else if (weight <= 0 && heightM <= 0) {
        // Display an error message if inputs are not valid
        resultDiv.textContent = 'Please enter a valid weight and height';
        res.textContent = '';
    }
    else if(heightM <= 0){
        resultDiv.textContent = 'Please enter a valid height';
        res.textContent = '';
    }
    else{
        resultDiv.textContent = 'Please enter a valid weight';
        res.textContent = '';
    }
}


