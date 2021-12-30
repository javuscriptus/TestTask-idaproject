import {
    addsItemsToPage
} from './addsItemsToPage.js'
import {
    db
} from './firebase.js'
import {
    collection,
    addDoc,
    serverTimestamp
} from 'firebase/firestore'

export const submitForm = (mainForm) => {
    // Получаем данные введенные в форму 
    const serializeForm = () => {
        const data = new FormData(mainForm)
        return Object.fromEntries(data)
    }

    const resetForm = () => {
        let inputName = mainForm.name;
        let inputDescription = mainForm.description;
        let inputLink = mainForm.link;
        let inputPrice = mainForm.price;
        let submitBtn = mainForm.submit

        inputName.value = ''
        inputDescription.value = ''
        inputLink.value = ''
        inputPrice.value = ''

        submitBtn.disabled = true;
    }

    // Обрабатываем выполнение формы
    const handleFormSubmit = (event) => {
        // Убираем стандартное поведение формы
        event.preventDefault()

        const data = serializeForm()
        addToFirebase(data)
        // Добавляем товар на страницу
        addsItemsToPage(data)
        // Сбрасываем поля в форме
        resetForm()
    }

    // Добавляем данные из формы в firebase
    const addToFirebase = async (item) => {
        try {
            await addDoc(collection(db, 'items'), {
                timestamp: serverTimestamp(),
                item: item,
            })
        } catch (error) {
            alert(error)
        }
    };

    mainForm.addEventListener('submit', handleFormSubmit)
}