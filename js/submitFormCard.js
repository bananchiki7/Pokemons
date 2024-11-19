import { clearInput } from "./clearInput";
import { createCard } from "./createCard";
import { operateLoader } from "./operateLoader";
import { root } from "./root";
import { getDataName } from "./service/api";

let namePrevious = "";
export async function submitFormCard(event) {
    event.preventDefault()  
    
    const name = root.cardInput.value;
    if(name !== namePrevious){
        operateLoader()
        const cardData = await getDataName(name);

        if(cardData === undefined){
            root.cardList.innerHTML = "<p>your pokemon is undefidned</p>";
            operateLoader()
        } else {
            namePrevious = root.cardInput.value;;
            root.cardList.innerHTML = createCard(cardData, "card")
            operateLoader()
        }
    }
    clearInput("cardForm")
}
