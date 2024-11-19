import { root } from "./root";

export function operateCardAdd() {
    root.cardSection.classList.add("is-hidden");
}

export function operateCardRemove() {
    root.cardSection.classList.remove("is-hidden");
}