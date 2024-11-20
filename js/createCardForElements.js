import { compareImages } from "./compareImages";
import { cardElements } from "./cardElements"

export function createCardForElements(obj) {
    return `<div class="swiper-slide">
                <img class="swiper-slide__picture" src="${compareImages(obj)}" alt="">
                <h2 class="swiper-slide__name">${obj.name}</h2>
                <p class="swiper-slide__height">height: ${obj.height * 10}cm</p>
                <p class="swiper-slide__weight">weight: ${obj.weight / 10}kg</p>
                <p class="swiper-slide__elements">elements: ${cardElements(obj)}</p>
            </div>`
}