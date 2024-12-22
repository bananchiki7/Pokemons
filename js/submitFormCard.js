import { clearInput } from "./clearInput";
import { createListOfCard } from "./createListOfCard";
import { filterPokemons } from "./filterPokemons";
import { operateLoader } from "./operateLoader";
import { root } from "./root";

let namePrevious = "";
export async function submitFormCard(event) {
    event.preventDefault()  
    
    const element = root.elementsInput.value;
    
    const name = root.cardInput.value;
    if(name !== namePrevious){
        operateLoader()
        
        const allData = await filterPokemons(name, element);
        
        if(allData === undefined || name === ""){
            root.cardList.innerHTML = "<p>your pokemon is undefidned</p>";
        } else {
            namePrevious = root.cardInput.value;
            root.cardList.innerHTML = createListOfCard(allData, "card")
        }
        operateLoader()
    }
    clearInput("cardForm")
}
