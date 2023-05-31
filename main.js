// Get input values from HTML
const getForm = document.querySelector('#form');
const inputField = document.querySelector('input');
const submitBtn = document.querySelector('#btn');

let displayResults = document.querySelector('#result');

// Declare variable to set the results to for displayResults.innerHTML
let resultStr;

// Declare variable and set to 'true' to stop compute()
// from displaying results principal input is invalid
let isValid = true;

// Submit form inputs
submitBtn.addEventListener('click', compute);

// Prevent default form submission
getForm.addEventListener('input', (e) => {
 e.preventDefault();
})

// Gets new value from the range slider and updates the number in the #rate_val span,
function updateRate() {
    
 let rateVal = document.getElementById('rate').value; 
 
 document.getElementById('rate_val').innerHTML= `${rateVal}%`;
}

// Computes the interest 
function compute() {   
    
 const principal = document.getElementById('principal').value;
 const rate = document.getElementById('rate').value;
 const years = document.getElementById('years').value;

 validation(principal);     

 if (!isValid) {
  return;
 }
 
 let interest = principal * years * rate /100;
  
 document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);

 let year = new Date().getFullYear() + parseInt(years);
     
 resultStr = 
  `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
  at an interest rate of <span class="resultStr"><mark>${rate}%</mark></span>, \<br\>
  you will receive an amount of $<span class="resultStr"><mark>${interest.toFixed(2)}</mark></span> \<br\>
  in the year <span class="resultStr"><mark>${year}</mark></span>. \<b\>`;  
 
 results();
 
 // Resets the form and range slider
 setTimeout(() => getForm.reset(), 5000);
 setTimeout(() => resetRangeSlider(), 5000);
}

function validation(principal) {
 if (principal == '' || principal <=0 ) {
 alert('Enter a positive number');
  isValid = false;
  return false;
 }
  isValid = true;
  return true;
}

// Display results
function results() {
 // Set results to display in #result span
 displayResults.innerHTML = resultStr;

 // Reset #result span to empty after 5 secs
 setTimeout(() => displayResults.innerHTML = '', 5000);

 // Reset range slider text value to original value
 setTimeout(() => document.querySelector('#rate_val').innerHTML = '10.25%', 5000);
}
// Reset range slider to original position
function resetRangeSlider() {
 document.querySelector('#btn').addEventListener('click', ()=> {
 setTimeout(() => document.querySelector('#rate').value = 10.25, 5000);
 });
}