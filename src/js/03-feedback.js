console.log("Hello world");

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea : document.querySelector('textarea')
}
// console.log(refs.form);
// console.log(refs.email);
// console.log(refs.textarea);

const objectLocalStorage = {};
 console.log(objectLocalStorage);

// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onTextAreaInput);
// refs.textarea.addEventListener('input', onTextAreaInput);
refs.form.addEventListener('input', onTextAreaInput);
// console.log(form);



function onTextAreaInput(evt) {
    // console.log(evt);

    console.log(refs.email.value);
    console.log(refs.textarea.value);
    objectLocalStorage.mail = refs.email.value;
    objectLocalStorage.message = refs.textarea.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(objectLocalStorage))
}