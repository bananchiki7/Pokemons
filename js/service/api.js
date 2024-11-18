import axios from "axios";
const URL = 'https://pokeapi.co/api/v2/';

export async function getDataName(name) {
    try {
        const response = await axios.get(`${URL}pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getDataElement(element) {
    try {
        const response = await axios.get(`${URL}type/${element}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}