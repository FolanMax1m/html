import { authorizationModalWindow, errorMessage, successMessage } from './config.js'

const userData = {
    email: "vadimlevadko@gmail.com",
    password: "123456",
}

const formValidation = (email, password, status) => {
    const emailValue = email.value;
    const passwordValue = password.value;

    status.classList.remove('d-none');

    if(userData.email !== emailValue || userData.password !== passwordValue) {
        email.classList.add('border-danger');
        password.classList.add('border-danger');
        status.classList.add('alert-danger');
        return status.innerHTML = errorMessage;
    }

    if(email.classList.contains('border-danger')) {
        email.classList.remove('border-danger');
        password.classList.remove('border-danger');
        status.classList.replace('alert-danger', 'alert-success');
    }

    status.classList.add('alert-success');
    return status.innerHTML = successMessage;
}

export default function authorizationFormHandler(event) {
    event.preventDefault();

    const email = event.target.querySelector("[data-form-authorization-email]");
    const password = event.target.querySelector("[data-form-authorization-password]");
    const status = authorizationModalWindow.querySelector("[data-form-authorization-status]");

    formValidation(email, password, status);
}