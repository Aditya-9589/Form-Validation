const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    // ----  UserName :-  ---- 
    if(usernameValue === '' ) {
        setError(username, 'Username is required.');
    }
    else {
        setSuccess(username);
    }

    //----  E-mail :-  ----
    if(emailValue === '' ) {
        setError(email, " Email is required.")
    }
    else if(!isValidEmail(emailValue)) {
        setError(email, "Provide a valid Email Address.")
    }
    else {
        setSuccess(email);
    }

    // ----  Password :-  ---- 
    if(passwordValue === '' ) {
            setError(password, 'Password is required.');
        }
    else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters.")
    }
    else {
        setSuccess(password);
    }

    // ----  Confirm Password :-  ----
    if(cPasswordValue === '' ) {
        setError(cPassword, "Please confirm your Password.");
    }
    else if (cPasswordValue !== passwordValue) {
        setError(cPassword, "Password doesn't match.");
    }
    else {
        setSuccess(cPassword);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}