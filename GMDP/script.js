const dataLowercase = "qwertyuiopasdfghjklzxcvbnm"
console.log(dataLowercase.length);
const dataUppercase = dataLowercase.toUpperCase();

const dataNumbers ='0123456789';

const dataSymbole = '{}[]()*&^%$#@!:;,./<>?""`~_-+=^';
 const rangeValue = document.getElementById('password-length');
 const passwordOutput = document.getElementById('password-output');
//  const generateButton = document.getElementById('generate-button');
//  const lowercaseElement = document.getElementById('lowercase');
//  const uppercaseElement = document.getElementById('uppercase');
//  const numbersElement = document.getElementById('numbers');
//  const symbolsElement = document.getElementById('symbols');


//  document.addEventListener('click', (e) => {
//     console.log(e.target.id)
//  })

function generatepassword(){
    let data = [];
    // if (lowercase.checked) data.push(...dataLowercase);
    if(dataLowercase.checked)
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbole);
    console.log(data);

    }

    generateButton.addEventListener('click', generatepassword);

    //lowercase.checked ? data.push(dataLowercase): null;

    //if(lowercase.checked) data.push(dataLowercase);