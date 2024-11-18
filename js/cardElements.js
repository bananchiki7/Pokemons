export function cardElements(obj) {
    const elements = obj.types.map(x => " " + x.type.name);
    return elements;
}