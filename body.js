
const principal = document.getElementById('principal').value;
const years = document.getElementById('years').value;

let year = new Date().getFullYear()+parseInt(years);



btn.addEventListener('click', compute, false);

const resultStr = `If you deposit $<span><mark>${principal}</mark></span>, `;

document.getElementById('result').innerHTML= resultStr;






