import * as flsFunctions from './modules/functions.js';
import { checkForm } from './modules/checkForm.js';
import { submitForm } from './modules/submitForm.js'
import { renderItems } from './modules/renderItems.js'
const mainForm = document.forms.addItemForm;

flsFunctions.isWebp();
checkForm(mainForm);
submitForm(mainForm);
renderItems()

// https://github.com/javuscriptus