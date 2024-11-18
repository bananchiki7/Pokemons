export function compareImages(obj) {
    if(obj.sprites.front_default === null){
        obj.sprites.front_default = "./img/photo_2024-01-29_16-14-43.jpg";
    }
    return obj.sprites.front_default;
}