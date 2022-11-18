
// Computes the interest, changes the value in the 'Interest' output field, 
function compute()
{
    const principal = document.querySelector('#principal');
    const rate = document.querySelector('#rate');
    const years = document.querySelector('#years');
    const rate_val = document.querySelector('#rate_val');
    let interest = principal * years * rate /100;
        document.querySelector('#interest').innerHTML = '$'+interest.toFixed(2);
    let year = new Date().getFullYear()+parseInt(years);
}
// Gets new value from the range slider and updates the number in the #rate_val span,
// underscore in front of _rate_val because it isn't read
function updateRate(_rate_val) {
    let rateVal = document.querySelector('#rate'); 
    document.querySelector('#rate_val').innerHTML= `${rateVal}%`;
        
}

rate.addEventListener('input', updateRate, false);

const checkCompletion = () => {
    if (principal.value !=='' &&
    rate_val.value !=='' &&
    rate.value !=='' &&
    year.value !=='') {

    const resultStr = 
    `If you deposit $<span><mark>${principal.value}</mark></span> \<br\>
    at an interest rate of <span><mark>${rate_val.value}%</mark></span>, \<br\>
    you will receive an amount of $<span><mark>${rate.value}</mark></span> \<br\>
    in the year <span><mark>${year.value}</mark></span> \<b\>`;
    
    document.querySelector('result').innerHTML= resultStr;
    
    // Listens for the 'computer interest' button to be clicked then runs the compute function
    }

    principal.addEventListener('change', checkCompletion, false);
    rate_val.addEventListener('change', checkCompletion, false);
    principal.addEventListener('change', checkCompletion, false);
    principal.addEventListener('change', checkCompletion, false);
}