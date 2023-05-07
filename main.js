const getForm = document.querySelector('#form'); 
let result = document.querySelector('#result');
getForm.addEventListener('submit', onSubmit);

function main() {
    compute();
    onSubmit(e);
    // getForm.addEventListener('submit', onSubmit);
}

// Computes the interest, changes the value in the 'Interest' output field
function compute()
{
    const principal = document.getElementById('principal').value;
    console.log('cPrincipal ' + principal);
    const rate = document.getElementById('rate').value;
    console.log('cRate ' + rate);
    const years = document.getElementById('years').value;
    console.log('cYears ' + years);
     
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);
        console.log('Interest ' + interest.toFixed(2));
    
}

// Gets new value from the range slider and updates the number in the #rate_val span,
// underscore in front of _rate_val because it isn't read
function updateRate(_rate_val) {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML = `${rateVal}%`;
}

function onSubmit(e) {
    console.log("onSubmit entry ");
    e.preventDefault();
    console.log("preventDefault");
    // Should produce a popup window but currently isn't doing this
    if (principal === '') {
        alert("Please enter an amount.");
    }

    result.innerHTML = resultStr();
    console.log("result.innerHTML")
    setTimeout(() => result.innerHTML = '', 5000);
    console.log("setTimeout");
}

function resultStr() {
    console.log("principal " + principal.value);
    console.log("interest rate " + rate.value);
    console.log("interest " + interest.value);
    console.log("years " + years.value);
    return(`If you deposit $<span class="resultStr"><mark>${principal.value}</mark></span> \<br\>
      at an interest rate of <span class="resultStr"><mark>${rate.value}%</mark></span>, \<br\>
        you will receive an amount of $<span class="resultStr"><mark>${interest.value}</mark></span> \<br\>
       in the year <span class="resultStr"><mark>${years.value}</mark></span>. \<b\>`);
       
}

// getPrincipal.addEventListener('blur', check);

// const getMessage = document.querySelector('.msg');

// const checkCompletion = () => {
//     if (principal.value !=='' &&
//     rate_val.value !=='' &&
//     rate.value !=='' &&
//     year.value !=='') {

//     const resultStr = 
//     `If you deposit $<span><mark>${principal.value}</mark></span> \<br\>
//     at an interest rate of <span><mark>${rate_val.value}%</mark></span>, \<br\>
//     you will receive an amount of $<span><mark>${rate.value}</mark></span> \<br\>
//     in the year <span><mark>${year.value}</mark></span> \<b\>`;
    
//     document.querySelector('result').innerHTML= resultStr;
    
//     // Listens for the 'computer interest' button to be clicked then runs the compute function
//     }

//     principal.addEventListener('change', checkCompletion, false);
//     rate_val.addEventListener('change', checkCompletion, false);
//     principal.addEventListener('change', checkCompletion, false);
//     principal.addEventListener('change', checkCompletion, false);
// }

// let year = new Date().getFullYear()+parseInt(years);