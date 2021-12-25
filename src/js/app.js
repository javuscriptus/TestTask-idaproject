import * as flsFunctions from './modules/functions.js';

const submitButton = document.querySelector('.form__button');

// const mainForm = document.forms.addItemForm;

const inputs = document.querySelectorAll('input')

let form = Array.from(inputs).map((i) => {
    return {
        required: i.required,
        value: i.value,
    }
})

const setError = (element, message) => {
    const error = document.createElement('span');
    error.textContent = message;
    error.classList.add('error');

    if (element.required) {
        if (element.value.trim() === '' && !element.classList.contains('input-error') ) {
            element.classList.add('input-error')
            element.after(error);
        } else if (element.value.trim().length > 0 && element.classList.contains('input-error')) {
            element.parentElement.removeChild(element.parentNode.lastElementChild)
            element.classList.remove('input-error')
            error.classList.remove('error');
        }
    }
    checkBtn();
}

const checkBtn = () => {
    const requiredInputs = form.filter(i => i.required);
    const haveValueRequiredInputs = form.filter(i => i.required && i.value);

    submitButton.disabled = requiredInputs.length !== haveValueRequiredInputs.length;
}

const changeValue = (index, value) => {
    form[index].value = value;
}

inputs.forEach((item, index) => {
    item.addEventListener('input', ({
        target
    }) => {
        setError(target, "Поле является обязательным")
        changeValue(index, target.value)
    })

    item.addEventListener('focus', ({
        target
    }) => {
        setError(target, "Поле является обязательным")
        changeValue(index, target.value)
    })
})

flsFunctions.isWebp();

// https://github.com/javuscriptus