export const addsItemsToPage = (item) => {
    const main = document.querySelector('.items');

    const {
        name,
        description,
        link,
        price
    } = item;

    const isValidHttpUrl = () => {
        let url;

        try {
            url = new URL(link);
        } catch (_) {
            return false;
        }

        return true;
    }

    const itemElement =  `<div class="items-item">
                                <img src="${isValidHttpUrl() ? link : "img/item.png"}" class="items-item__img" alt="item">
                                <div class="item-info">
                                    <h3 class="item-info__title" title="${name ? name : 'Название отсутствует'}">${name ? name : 'Название отсутствует'}</h3>
                                    <p class="item-info__description" title="${description ? description : 'Описание отсутствует'}">${description ? description : 'Описание отсутствует'}</p>
                                    <span class="item-info__price" title="${price ? price : 'Цена отсутствует'} руб.">${price ? price : 'Цена отсутствует'} руб.</span>
                                </div>
                            </div>`;

    main.insertAdjacentHTML('afterbegin', itemElement)
}