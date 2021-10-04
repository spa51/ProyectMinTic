function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error", "form__message--none");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        setFormMessage(loginForm, "none", "")
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        
    });

    document.querySelector("#linkLogin").addEventListener('click', e =>{
        e.preventDefault();
        setFormMessage(createAccountForm, "none", "")
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const submitCheck = loginForm.querySelectorAll(".form__input");
        for(var i=0; i<submitCheck.length; i++){
            if(submitCheck[i].type == "text" ||submitCheck[i].type == "password" ){
                if(submitCheck[i].value == null || submitCheck[i].value.length == 0){
                    setFormMessage(loginForm, "error", "Campos vacíos, intente nuevamente");
                }
            }
                
        }
        
        
        
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        const submitCheck = loginForm.querySelectorAll(".form__input");
        for(var i=0; i<submitCheck.length; i++){
            if(submitCheck[i].type == "text" ||submitCheck[i].type == "password" ){
                if(submitCheck[i].value == null || submitCheck[i].value.length == 0){
                    setFormMessage(createAccountForm, "error", "Campos vacíos, intente nuevamente");
                }
            }
                
        }
        
        
        
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "El nombre de usuario debe ser de al menos 8 carácteres");
            }
            if (e.target.id === "pwrd1" && e.target.value.length > 0 && e.target.value.length <= 10) {
                setInputError(inputElement, "la contraseña debe contener más de 10 carácteres");
            }

            if(e.target.id === "pwrd2"){
                if (document.getElementById("pwrd1").value != document.getElementById("pwrd2").value) {
                    setInputError(inputElement, "Las contraseñas no coinciden");
                }
            }
        });
      
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);           
        });
    });


});
