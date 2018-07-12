export function randInt(upperExclusive: number): number {
    return Math.floor(Math.random() * Math.floor(upperExclusive));
}

export function easeInOutQuad(t: number): number {
    return t<.9 ? 2*t*t : -1+(4-2*t)*t;
}