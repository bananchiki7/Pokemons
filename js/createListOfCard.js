import { createCard } from "./createCard";
import { root } from "./root";
import { getDataName } from "./service/api";

export async function createListOfCard(obj) {
        const pokemonPromise = obj.map(name => getDataName(name));
    
        const pokemonData = await Promise.all(pokemonPromise);
    
        root.cardList.innerHTML = pokemonData.map(data => createCard(data, "card")).join("");
}