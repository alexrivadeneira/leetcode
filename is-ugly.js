var isUgly = function(num) {

    var primeFactors = [2,3,5];
    
    for(var i = 0; i < primeFactors.length; i++){
            while(num % primeFactors[i] === 0 && num > i){
                num /= primeFactors[i];
            }
    }

    return num === 1;
};