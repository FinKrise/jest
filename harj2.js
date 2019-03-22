function jako(a, b){
    if (a === undefined || a === null){
        throw new Error('ei parametreja');
    }
    if (b === undefined || b === null){
        throw new Error('ei parametreja');
    }
    const result = Number(a) / Number(b);
    if(Number. isNaN(result)){
        throw new Error('ei oikea luku');
    }
    return result;
}
module.exports = jako;