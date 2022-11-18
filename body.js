const getForm = document.querySelector('#form');   
const getPrincipal = document.querySelector('#principal');
    console.log(getPrincipal);
const getRate = document.querySelector('#rate');
const getYears = document.querySelector('#years');
const getRate_val = document.querySelector('#rate_val');
const getInterest = document.querySelector('#interest');
const getMessage = document.querySelector('.msg');
const displayResults = document.querySelector('#result');

const resultStr = 
    `If you deposit $<span class="resultStr"><mark>${getPrincipal.value}</mark></span> \<br\>
    at an interest rate of <span class="resultStr"><mark>${getRate_val.value}%</mark></span>, \<br\>
    you will receive an amount of $<span class="resultStr"><mark>${getInterest.value}</mark></span> \<br\>
    in the year <span class="resultStr"><mark>${getYears.value}</mark></span>. \<b\>` 
    ;


getForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (getPrincipal === '') {
        alert("Please enter an amount.");
    }

    result.innerHTML = resultStr;

    setTimeout(() => result.remove(), 5000);
    
    }
    
    
    
    
    // Sets current year to output correct ending year based on no. of years input
    //let year = new Date().getFullYear()+parseInt(getYears);
        
    
    
    
    
