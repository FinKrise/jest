function ala(a, b){
    if (a === undefined || a === null){
        throw new Error('ei parametreja');
    }
    if (b === undefined || b === null){
        throw new Error('ei parametreja');
    }
    const result = Number(a) * Number(b) / 2;
    return result;
}
module.exports = ala;