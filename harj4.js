function ala(a, b, c){
    if (a === undefined || a === null){
        throw new Error('ei parametreja');
    }
    if (b === undefined || b === null){
        throw new Error('ei parametreja');
    }
    if (c === undefined || c === null){
        throw new Error('ei parametreja');
    }
    const result = Number(a) * Number(b) / Number(c);
    return result;
}
module.exports = ala;