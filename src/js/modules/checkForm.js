const submitButton = document.querySelector('.form__button');

export const checkForm = (mainForm) => {
    // Добавляет ошибку
    const addError = (element, message) => {
        const errorSpan = document.createElement('span');
        errorSpan.textContent = message;
        errorSpan.classList.add('error');

        if (element.value.trim() === '' && !element.classList.contains('input-error')) {
            element.classList.add('input-error');
            element.after(errorSpan);

        }
    }

    // Удаляет ошибку
    const removeError = (element) => {
        element.parentElement.removeChild(element.parentNode.lastElementChild);
        element.classList.remove('input-error');
    }

    // Активирует кнопку
    const enableBtn = () => submitButton.disabled = false;

    // Отключает кнопку
    const disableBtn = () => submitButton.disabled = true;

    mainForm.addEventListener('focusout', ({
        target
    }) => {
        target.value = target.value.trim();
        target.required && addError(target, "Поле является обязательным");
    })

    mainForm.addEventListener('keyup', ({
        target
    }) => {
        if (target.value.trim().length > 0) {
            target.classList.contains('input-error') && removeError(target);
            mainForm.checkValidity() ? enableBtn() : disableBtn();
        }
        if (target.value.trim().length === 0 && target.required) {
            addError(target, "Поле является обязательным");
            disableBtn();
        }

    })

    mainForm.price.addEventListener('change', ({
        target
    }) => {
        const spaceNumber = target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        target.value = spaceNumber;

    })
}