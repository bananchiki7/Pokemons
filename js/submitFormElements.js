import { operateLoader } from "./operateLoader";
import { root } from "./root";
import { getDataElement } from "./service/api";
import { createElements } from "./createElements";
import { clearInput } from "./clearInput";
import { operateCardAdd, operateCardRemove } from "./operateCard";

export async function submitFormElements(event) {
    event.preventDefault()

    const element = root.elementsInput.value;
    operateLoader()
    const data = await getDataElement(element);
    if (data === undefined) {
        root.elementsList.innerHTML = "<p>this element is undefidned</p>";
        operateCardAdd()
    } else {
        createElements(data, "elements");
        root.cardList.innerHTML = "";
        operateCardRemove()
    }
    operateLoader()
    clearInput("elementsForm")
}