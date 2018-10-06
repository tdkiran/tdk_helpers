const add = (...input) => {
    return [...input].reduce((total, curr) => total + curr, 0);
}

const sub = (a, b) => {
    return a - b;
}

/*
 * Export all of them as named export.
 */

export { add, sub };