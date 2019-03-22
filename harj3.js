function lippu(input){
    if (input === undefined || input === null){
        throw new Error('ei parametreja');
    }
    let result=null;
    if(input<7){
    result = Hinta = 0;
    }
    if(input > 7 && input<16){
    result = Hinta = 1;
    }
    if(input > 16 && input <= 25){
    result = Hinta = 1.50;
    }
    if(input>25){
    result = Hinta = 3;
    }
    return result;
}
module.exports = lippu;