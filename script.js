const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitButton = document.querySelector('[type="submit"]');
const errorParent = document.querySelector('.form-right');
let errorMessage = document.createElement('div');

function validate(p1, p2) {
    if (p1 === '' || p1 === p2) {
        return true;
    } else {
        return false;
    }
}

function checkError() {
    if (errorMessage.innerText === '*Passwords do not match!') {
        return true;
    } else {
        return false;
    }
}

submitButton.addEventListener('click', (e) => {
    if (!(validate(password.value, confirmPassword.value))) {
        if (!(checkError())) {
            e.preventDefault();
            errorMessage.innerText = '*Passwords do not match!';
            errorMessage.classList.add('error-message');
            errorParent.append(errorMessage);
        } else {
            e.preventDefault();
        }
    }
});
