import { createCardForElements } from "./createCardForElements";
import { root } from "./root";
import { getDataName } from "./service/api";

export async function createElements(obj) {
    const arr = obj.pokemon.map(item => item.pokemon.name);

    const pokemonPromise = arr.map(name => getDataName(name));
    const pokemonData = await Promise.all(pokemonPromise);

    root.elementsList.innerHTML = pokemonData.map(data => createCardForElements(data)).join("");
}