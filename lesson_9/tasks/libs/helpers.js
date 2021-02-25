export function getRandomColor() {
    let r = getRandomValue(0, 255).toString(16);
    if (r.length < 2) r = '0' + r;
    let g = getRandomValue(0, 255).toString(16);
    if (g.length < 2) g = '0' + g;
    let b = getRandomValue(0, 255).toString(16);
    if (b.length < 2) b = '0' + b;
    return `#${r}${g}${b}`;
}

export function getRandomValue(min = 1000000000, max = 9999999999) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDate(date) {
    console.log(date);
    if (date === undefined) {
        date = new Date();
        date = ('0' + date.getDate()).slice(-2) + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + date.getFullYear();
    } else if (date.length > 10) {
        date = new Date(date.slice(0, 10));
        date = ('0' + date.getDate()).slice(-2) + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + date.getFullYear();
    }

    return date;
}