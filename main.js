const getForm = document.querySelector('#form'); 
const getMessage = document.querySelector('.msg');
const displayResults = document.querySelector('#result');

let resultStr;

getForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    result.innerHTML = resultStr;
    
    setTimeout(() => result.innerHTML = '', 5000);
  
    }

// Computes the interest, changes the value in the 'Interest' output field, 
function compute()
{
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;
        
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);

    resultStr = 
    `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
    at an interest rate of <span class="resultStr"><mark>${rate}%</mark></span>, \<br\>
    you will receive an amount of $<span class="resultStr"><mark>${interest.toFixed(2)}</mark></span> \<br\>
    in the year <span class="resultStr"><mark>${years}</mark></span>. \<b\>` 
    ;
}

// Gets new value from the range slider and updates the number in the #rate_val span,
// underscore in front of _rate_val because it isn't read
function updateRate(_rate_val) {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML= `${rateVal}%`; 
    return rateVal;
}
