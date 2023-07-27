console.log("Hello world");

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea : document.querySelector('textarea')
}
console.log(refs.form);
console.log(refs.email);
console.log(refs.textarea);



// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onTextAreaInput);
// refs.textarea.addEventListener('input', onTextAreaInput);
refs.form.addEventListener('input', onTextAreaInput);
console.log(form);

 const objectLocalStorage = {};

function onTextAreaInput(evt) {
    // const message = evt.target.value;
    console.log(evt);
    // objectLocalStorage.email = refs.email.value;
    // objectLocalStorage.message = refs.textarea.value;

    // console.log(objectLocalStorage);
    // console.log(objectLocalStorage.message);
    console.log(refs.email.value);
    console.log(refs.textarea.value);
    refs.email.value = objectLocalStorage.mail;
    refs.textarea.value = objectLocalStorage.message;
    // localStorage.setItem("feedback-form-state", message)
}