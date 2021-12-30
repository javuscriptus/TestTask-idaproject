import {
    collection,
    getDocs,
} from 'firebase/firestore'
import {
    db
} from './firebase.js'
import { addsItemsToPage } from './addsItemsToPage.js'

export const renderItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));

    querySnapshot.forEach((doc) => {
        const docData = doc.data();

        addsItemsToPage(docData.item)
    });
}