import {
    collection,
    getDocs,
} from 'firebase/firestore'
import {
    db
} from './firebase.js'

export const renderItems = async () => {
    const main = document.querySelector('.items');
    const querySnapshot = await getDocs(collection(db, "items"));

    querySnapshot.forEach((doc) => {
        const docData = doc.data();

        const {
            name,
            description,
            link,
            price
        } = docData.item;

        const itemElement = `<div class="items-item">
                                <img src="${link ? link : "img/item.png"}" class="items-item__img" alt="item">
                                <div class="item-info">
                                    <h3 class="item-info__title">${name ? name : 'Данные не получены'}</h3>
                                    <p class="item-info__description">${description ? description : 'Данные не получены'}</p>
                                    <span class="item-info__price">${price ? price : 'Данные не получены'}</span>
                                </div>
                            </div>`;

        main.insertAdjacentHTML('beforeend', itemElement)
    });
}