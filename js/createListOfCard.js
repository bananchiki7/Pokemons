import { createCard } from "./createCard";
import { root } from "./root";
import { getDataName } from "./service/api";

export async function createListOfCard(obj) {
    if(obj !== undefined){
        const pokemonPromise = obj.map(name => getDataName(name));
    
        const pokemonData = await Promise.all(pokemonPromise);
    
        root.cardList.innerHTML = pokemonData.map(data => createCard(data, "card")).join("");
    } else {
        root.cardList.innerHTML = "<p>your pokemon is undefidned</p>";
    }
}