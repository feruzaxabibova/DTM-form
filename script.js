const BUDJET = 150;
const KONTRAKT = 80;
const SUPER_KONTRAT = 60;

var elForm = document.querySelector(".form-js");

        var elName = document.querySelector('.name-js');
        var elNumber = document.querySelector('.number-js');
        var elChecked = document.querySelector('.check-js');
        var elBtn = document.querySelector('.result-btn');
        var elResult = document.querySelector('.result-js');
    
        
        elBtn.onclick = function()  {
            var elBall = document.querySelector('.ball-js').value;
    
            if (elChecked.checked) {
                elResult.textContent = "ERROR!!!"
                elResult.style.color = "red" 
            } else if (elBall >= BUDJET) {
                elResult.textContent = "Tabriklaymiz, budjetga kirdingiz!"
                elResult.style.color = "green"
            } else if (elBall >= KONTRAKT) {
                elResult.textContent = "Tabriklaymiz, kontraktga kirdingiz!"
                elResult.style.color = "green"
            } else if (elBall >= SUPER_KONTRAT) {
                elResult.textContent = "Tabriklaymiz, supper kontrktga kirdingiz!"
                elResult.style.color = "green"
            } else {
                elResult.textContent = "Kirolmadingiz!"
                elResult.style.color = "red"
            }
        }
   
   




