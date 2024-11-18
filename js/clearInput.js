import { root } from "./root.js";

export function clearInput(type) {
    if(type === "namesForm"){
        root.namesForm.reset()
    } else {
        root.elementsForm.reset()
    }
    
}