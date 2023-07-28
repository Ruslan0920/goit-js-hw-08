const throttle = require("lodash.throttle");

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea : document.querySelector('textarea')
}

let objectLocalStorage = {};
//  console.log(objectLocalStorage);

refs.form.addEventListener('input', throttle(formInput, 500));
refs.form.addEventListener('submit', formSubmit);

fillingForm();

function formInput(evt) {
    objectLocalStorage.email = refs.email.value;
    objectLocalStorage.message = refs.textarea.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(objectLocalStorage));
}

function formSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");

    console.log(objectLocalStorage);
}

function fillingForm() {
    const savedValues = JSON.parse(localStorage.getItem("feedback-form-state"));
    // console.log(savedValues);
    if (savedValues) {
        refs.email.value = savedValues.email;
        refs.textarea.value = savedValues.message;
        objectLocalStorage.email = refs.email.value;
        objectLocalStorage.message = refs.textarea.value;
    }
}