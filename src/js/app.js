import * as flsFunctions from './modules/functions.js';
import {
    checkForm
} from './modules/checkForm.js';
import {
    submitForm
} from './modules/submitForm.js'
import {
    renderItems
} from './modules/renderItems.js'
import {
    sortItems
} from './modules/sortItems.js'

const mainForm = document.forms.addItemForm;

const App = () => {
    flsFunctions.isWebp();
    checkForm(mainForm);
    submitForm(mainForm);
    renderItems()
    sortItems()
}

document.addEventListener('DOMContentLoaded', App)

// https://github.com/javuscriptus