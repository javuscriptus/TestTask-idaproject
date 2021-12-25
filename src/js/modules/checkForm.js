// // Подразумевается что информация об обязательных полях приходит с сервера
// const requiredInputNames = ['name', 'link', 'price'];

// const submitButton = document.querySelector('.form__button')

// export const checkForm = (e, form) => {
//     const targetInput = e.target;

//     const setError = (message) => {
//         const error = document.createElement('span');
//         error.innerText = message;
//         targetInput.after(error);
//         error.classList.toggle('error');

//         if (targetInput.value.trim() && targetInput.nextElementSibling?.classList.value === 'error') {
//             targetInput.parentElement.remove(error)
//         }
//     }

//     const checkBtn = () => {
//         const requiredInputs = form.filter(i => i.required)
//         const b = form.filter(i => i.required && i.value.length)
//         btn.disabled = requiredInputs.length !== b.length;
//     }

//     requiredInputNames.forEach((i) => {
//         /*
//             Проверяем является ли инпут обязательным
//             Проверяем является ли инпут незаполненным
//             Проверяем добавлена ли уже ошибка
//         */
//         if ((targetInput.name === i && targetInput.value === '') && !targetInput.parentElement.querySelector('span')) {
//             setError("Поле является обязательным")
//         } else if (targetInput.value !== '') {
//             // const error = targetInput.parentElement.querySelector('span')
//             // targetInput.parentElement.removeChild(error)
//         }
//     })
// }