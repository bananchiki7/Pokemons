import { getDataElement } from "./service/api";

export async function filterPokemons(poke, element) {
    const listElements = await getDataElement(element);
    
    const arrNames = listElements.pokemon.map(item => item.pokemon.name);
    const nameArr = arrNames.filter(name =>
        name.includes(poke)
    );
    return nameArr
}