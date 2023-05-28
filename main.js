const log = console.log();
// TODO - add correct alerts per rubric
// TODO - add comments

// let resultStr;

const getForm = document.querySelector('#form');
 console.log('Var getForm: ' + getForm);
const inputField = document.querySelector('input');
 console.log('Var inputField: ' + inputField);
const submitBtn = document.querySelector('#btn');
 console.log('Var submitBtn: ' + submitBtn);

let displayResults = document.querySelector('#result');
 console.log('Var displayResults: ' + displayResults);
let resultStr;
 console.log('Var resultStr: ' + resultStr);

function main() {
    console.log('main() entry');
    updateRate();
    console.log('updateRate() ran');
    
// Solution sourced for this Free Code Camp blog article:
// https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/
    inputField.addEventListener('input', () => {
        console.log('validation() entry');
        inputField.setCustomValidity('');
        console.log('customValidity set to empty');
        inputField.checkValidity();
        console.log('checkValidity() ran');       
    });

    inputField.addEventListener('invalid', () => {
        inputField.setCustomValidity(alert('Enter a positive number.'));
        console.log('validity alert ran');
    });

    compute();
    console.log('compute() ran');
    results();
    console.log('results() ran');
}

// Gets new value from the range slider and updates the number in the #rate_val span,
function updateRate() {
    console.log('update() entry');
    let rateVal = document.getElementById('rate').value; 
    console.log('Var rateVal: ' + rateVal);
    document.getElementById('rate_val').innerHTML= `${rateVal}%`;
    console.log(`set innerHTML to ${rateVal}`);
}

// Computes the interest, changes the value in the 'Interest' output field, 
function compute(){     
    console.log('compute() entry');
    const principal = document.getElementById('principal').value;
    console.log('Var principal: ' + principal);
    const rate = document.getElementById('rate').value;
    console.log('Var rate: ' + rate);
    const years = document.getElementById('years').value;
    console.log('Var years: ' + years);
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);
        console.log('Var interest: ' + interest);
    let year = new Date().getFullYear() + parseInt(years);
    console.log('Var year: ' + year);

    resultStr = 
   
    `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
    at an interest rate of <span class="resultStr"><mark>${rate}%</mark></span>, \<br\>
    you will receive an amount of $<span class="resultStr"><mark>${interest.toFixed(2)}</mark></span> \<br\>
    in the year <span class="resultStr"><mark>${year}</mark></span>. \<b\>`;  
    console.log('Var resultStr: ' + resultStr);
}

function results() {
    console.log('results() entry');
displayResults.innerHTML = resultStr;
console.log(displayResults.innerHTML = resultStr);
       
setTimeout(() => displayResults.innerHTML = '', 5000);
console.log('setTimeout complete');
}

main();
console.log('main() ran');