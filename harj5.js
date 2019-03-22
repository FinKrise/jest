function ale(hinta){

    if (hinta === undefined || hinta === null){
        throw new Error('ei parametria');
    }
    hinta = Number(hinta);
    if(Number. isNaN(hinta)){
        throw new Error('ei oikea luku');
    }
    if(hinta < 100){
        return hinta;
    }
    else if(hinta > 100 && hinta < 200){
        
        return hinta - hinta * 0.05;
    }
    else if(hinta > 200 && hinta < 500){
        return hinta - hinta * 0.1;
    }
    else {
        return hinta - hinta * 0.15;
    }
}
module.exports = ale;