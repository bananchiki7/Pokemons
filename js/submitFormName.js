import { clearInput } from "./clearInput";
import { createCard } from "./createCard"
import { operateLoader } from "./operateLoader";
import { root } from "./root";
import { getDataName } from "./service/api";

let namePrevious = "";
export async function submitFormName(event) {
    event.preventDefault()  
    
    const name = root.namesInput.value;
    if(name !== namePrevious){
        operateLoader()
        const data = await getDataName(name);
    
        if(data === undefined){
            root.namesList.innerHTML = "<p>your pokemon is undefidned</p>";
            operateLoader()
        } else {
            namePrevious = root.namesInput.value;;
            root.namesList.innerHTML = createCard(data, "names");
            operateLoader()
        }
    }
    clearInput("namesForm")
}
