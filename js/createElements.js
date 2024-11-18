import { createCard } from "./createCard";
import { root } from "./root";
import { getDataName } from "./service/api";

export async function createElements(obj, type) {
    const arr = obj.pokemon.map(item => item.pokemon.name);

    const pokemonPromise = arr.map(name => getDataName(name));
    const pokemonData = await Promise.all(pokemonPromise);

    root.elementsList.innerHTML = pokemonData.map(data => createCard(data, type)).join("");
}