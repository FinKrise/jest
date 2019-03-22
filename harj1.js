function input(ika){
    if (ika === undefined || ika === null){
        throw new Error('ei parametreja');
    }
    if(ika < 18){
        return false;
    }
    else {
        return true;
}
}
module.exports = input;