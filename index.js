import { root } from "./js/root";
import { submitFormElements } from "./js/submitFormElements";
import { submitFormName } from "./js/submitFormName";

root.namesForm.addEventListener("submit", submitFormName)

root.elementsForm.addEventListener("submit", submitFormElements)