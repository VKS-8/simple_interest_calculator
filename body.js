
const principal = document.getElementById('principal').value;
const rate = document.getElementById('rate').value;
const years = document.getElementById('years').value;
const rate_val = document.getElementById('rate_val').value;
const interest = document.getElementById('interest').value;

// Sets current year to output correct ending year based on no. of years input
let year = new Date().getFullYear()+parseInt(years);

// Trying to use to update the interest rate amount based on slider input, but.....
function updateRate(rate_val) {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML= `${rateVal}%`;
}

// When the 'Compute Interest' button is clicked, the updateRate Function is called which triggers the 
// code that follows, uses capture instead of bubbling
btn.addEventListener('click', updateRate, false);

// The next three code blocks work together
// Created new CustomEvent, does not allow bubbling,  
// sets 'rate_val'to new output value in the 'resultStr' variable....hopefully;
// Sourced from: https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
const newRate_Val = new CustomEvent('updateRate', {
    bubbles: false,
    detail: { text: () => rate_val.value }
  });

// Form listens for the custom 'newRat_Val';
// Sourced from: https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
  form.addEventListener('newRate_Val', (e) => 
  (e.detail.updateRate()));

// As the range slider is moved, triggers the event to fire;
// Sourced from: https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
rate_val.addEventListener('input', (e) =>
e.target.dispatchEvent(eventNewRate_Val));

const resultStr = 
`If you deposit $<span><mark>${principal}</mark></span> \<br\>
at an interest rate of <span><mark>${newRate_Val}%</mark></span>, \<br\>
you will receive an amount of $<span><mark>${interest}</mark></span> \<br\>
in the year <span><mark>${year}</mark></span> \<b\>` 
;

document.getElementById('result').innerHTML= resultStr;






