
let firstInput = document.querySelector("form input");
window.onload = function(){
    if(firstInput) firstInput.focus();
}

let form = document.querySelector("form");

let myFinput = document.querySelectorAll("form input:not([type='checkbox'])");

form.onsubmit = function(e){
    let inputsIsValid = true; 

    myFinput.forEach(input => {
        let errorSpan = input.nextElementSibling; 
        
       
        if(input.value.trim() === ""){
            inputsIsValid = false;
            input.style.borderColor = "red";
            if(errorSpan) errorSpan.textContent = "This input is required!";
        }
    
        else if(input.id === "password" && input.value.length <= 10){
            inputsIsValid = false; 
            input.style.borderColor = "red"; 
            if(errorSpan) errorSpan.textContent = "Wrong! The password should be more than 10 characters.";
        }
      
        else{
            input.style.borderColor = "green"; 
            if(errorSpan) errorSpan.textContent = ""; 
        }
    });

    
    if(inputsIsValid === false){
        e.preventDefault(); 
    }
}


const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");

if(togglePassword && passwordInput) {
    togglePassword.onclick = function() {
        let currentType = passwordInput.getAttribute("type");

        if (currentType === "password") {
            passwordInput.setAttribute("type", "text");
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            passwordInput.setAttribute("type", "password");
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    };
}


form.onreset = function() {
    myFinput.forEach(input => {
        input.style.borderColor = "#ccc"; 
        let errorSpan = input.nextElementSibling;
        if(errorSpan) errorSpan.textContent = "";
    });
};
     const myCard = document.getElementById('main-card');
        const openLoginBtn = document.getElementById('open-login');
        const resetFormBtn = document.querySelector('.res');

    
        openLoginBtn.addEventListener('click', () => {
            myCard.classList.add('flipped');
        });

      
        resetFormBtn.addEventListener('click', () => {
            setTimeout(() => {
                myCard.classList.remove('flipped');
            }, 300); 
        });

let newP = document.querySelector(".log");
newP.addEventListener("click", function(){
    location.herf = "https://google.com"
})


