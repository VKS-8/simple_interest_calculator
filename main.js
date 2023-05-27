const log = console.log();
// TODO - add correct alerts per rubric
// TODO - add comments

// let resultStr;

const getForm = document.querySelector('#form');
const buttonSubmit = document.querySelector('#btn');

function main() {
  
    buttonSubmit.addEventListener('submit', (e) => {
    const principal = document.querySelector('#principal').value;
            console.log(typeof(principal.value));
        if(principal.checkValidity() === '') {
            console.log('Check entry');
            alert('Enter a positive number.');
            e.preventDefault();
        } else {
            compute();
        }
    }); 

    updateRate();
}

// Gets new value from the range slider and updates the number in the #rate_val span,
function updateRate() {
    let rateVal = document.getElementById('rate').value; 
    document.getElementById('rate_val').innerHTML= `${rateVal}%`;
}

// Computes the interest, changes the value in the 'Interest' output field, 
function compute()
{
    console.log('compute() entry');
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;
        
    let interest = principal * years * rate /100;
        document.getElementById('interest').innerHTML = '$'+interest.toFixed(2);

    let year = new Date().getFullYear() + parseInt(years);

    let displayResults = document.querySelector('#result');

    let resultStr = 
    `If you deposit $<span class="resultStr"><mark>${principal}</mark></span> \<br\>
    at an interest rate of <span class="resultStr"><mark>${rate}%</mark></span>, \<br\>
    you will receive an amount of $<span class="resultStr"><mark>${interest.toFixed(2)}</mark></span> \<br\>
    in the year <span class="resultStr"><mark>${year}</mark></span>. \<b\>`;
    
    displayResults.innerHTML = resultStr;
       
    setTimeout(() => result.innerHTML = '', 5000);
}

main()