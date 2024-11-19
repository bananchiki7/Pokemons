import { root } from "./js/root";
import { submitFormCard } from "./js/submitFormCard";
import { submitFormElements } from "./js/submitFormElements";
import { submitFormName } from "./js/submitFormName";

root.namesForm.addEventListener("submit", submitFormName)

root.elementsForm.addEventListener("submit", submitFormElements)

root.cardForm.addEventListener("submit", submitFormCard)