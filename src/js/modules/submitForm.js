import { addsItemsToPage } from './addsItemsToPage.js'
import {
    db
} from './firebase.js'
import {
    collection,
    addDoc,
    serverTimestamp
} from 'firebase/firestore'

export const submitForm = (mainForm) => {
    const serializeForm = (formNode) => {
        const data = new FormData(formNode)
        return Object.fromEntries(data)
    }

    const handleFormSubmit = (event) => {
        // event.preventDefault()
        const data = serializeForm(mainForm)
        mainForm.reset();
        addToFirebase(data)
        addsItemsToPage()
    }

    const addToFirebase = async (data) => {
        // Передаем в firebase заполненные поля
        try {
            await addDoc(collection(db, 'items'), {
                timestamp: serverTimestamp(),
                item: data,
            })
        } catch (error) {
            alert(error)
        }
    };

    mainForm.addEventListener('submit', handleFormSubmit)
}