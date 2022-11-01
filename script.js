function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate /100;
    let year = new Date().getFullYear()+parseInt(years);

    document.getElementById("interest").innerHTML = "$"+interest;
    document.getElementById("result").innerHTML= "If you deposit "+principal+","<br>"at an interest rate of "+rate+"%" <br>"You will receive an amount of "+amount+"," <br> + "in the year "+year+".";
    
}

function updateRate(rate_val) {
    let rateVal = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerHTML= rateVal+"%";
}



  
    







        
