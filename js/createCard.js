import { compareImages } from "./compareImages";
import { cardElements } from "./cardElements"

export function createCard(obj, type) {
    return `<li class="${type}-list__item">
                <img class="${type}-list__picture" src="${compareImages(obj)}" alt="">
                <h2 class="${type}-list__name">${obj.name}</h2>
                <p class="${type}-list__height">height: ${obj.height * 10}cm</p>
                <p class="${type}-list__weight">weight: ${obj.weight / 10}kg</p>
                <p class="${type}-list__elements">elements: ${cardElements(obj)}</p>
            </li>`
}
