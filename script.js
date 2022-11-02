const result = document.getElementById("result");

function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    
    let interest = principal * years * rate /100;
        document.getElementById("interest").innerHTML = "$"+interest.toFixed(2);

    let year = new Date().getFullYear()+parseInt(years);
    
}

function updateRate(rate_val) {
    let rateVal = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerHTML= `${rateVal.toFixed(2)}%`;
}


btn.addEventListener('click', compute, false);

result.innerHTML = `<div>If you deposit $<span>${principal.toFixed(2)}</span></div>
<div>at an interest rate of <span>${rate.toFixed(2)}%,</span><div>
<div>you will receive an amount of $<span>${interest}</span></div>
<div>in the year <span>${year}.`;

  
    







        
