const input = document.querySelector("input[type=text]");
const paragraphe = document.querySelector("p");

input.addEventListener("input", (e) => {
    const valueInput = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '');
   
  
    if (valueInput.split('').reverse().join('') === valueInput) {
        paragraphe.style.color = 'blue';
        paragraphe.textContent = valueInput + " est un palindrome";
       
    } else {
        paragraphe.style.color = 'red';
        paragraphe.textContent = valueInput + " n'est pas un palindrome";
    }
});