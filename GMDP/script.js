const dataLowercase = "qwertyuiopasdfghjklzxcvbnm"
// console.log(dataLowercase.length);
const dataUppercase = dataLowercase.toUpperCase();

const dataNumbers ='0123456789';

const dataSymbole = '{}[]()*&^%$#@!:;,./<>?""`~_-+=^';
 const rangeValue = document.getElementById('password-length');
 const passwordOutput = document.getElementById('password-output');
 console.log(passwordOutput)


function generatepassword(){
    let data = [];
    let password = "";
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbole);

    if(data.length === 0){
        alert('Veuillez selectionner les criteres de votre mot de passe');
        return;
    }
// console.log(data[2])
    for (i = 0; i < rangeValue; i++){
        password = password + data[Math.floor(Math.random() * data.length)];
        console.log(password)
        // passwordOutput.value = password;
    }

    }

    generateButton.addEventListener('click', generatepassword);

    //lowercase.checked ? data.push(dataLowercase): null;

    //if(lowercase.checked) data.push(dataLowercase);