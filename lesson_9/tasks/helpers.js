export {getRandomColor, getRandomValue}

function getRandomColor() {
    let r = getRandomValue(0, 255).toString(16);
    if (r.length < 2) r = '0' + r;
    let g = getRandomValue(0, 255).toString(16);
    if (g.length < 2) g = '0' + g;
    let b = getRandomValue(0, 255).toString(16);
    if (b.length < 2) b = '0' + b;
    return `#${r}${g}${b}`;
}

function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}