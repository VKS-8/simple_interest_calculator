document.addEventListener("DOMContentLoaded", ready);

// Computes the interest, changes the value in the 'Interest' output field, stops bubbling 
function compute(e)
{
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;

 
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);
        e.stopPropagation;
    
}
// Gets new value from the range slider and updates the number in the #rate_val span
function updateRate(rate_val) {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML= `${rateVal}%`;
}

// Listens for the 'computer interest' button to be clicked then runs the compute function
btn.addEventListener('click', compute, false);



  
    







        
