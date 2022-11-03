document.addEventListener("DOMContentLoaded", ready);

function compute(e)
{
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;

    
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);
        e.stopPropagation;
    
    
}

function updateRate(rate_val) {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML= `${rateVal}%`;
}


btn.addEventListener('click', compute, false);



  
    







        
