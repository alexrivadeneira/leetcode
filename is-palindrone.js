var isPalindrome = function(x) {

    var letters = x.toString().split("");


    console.log(letters);

    if(letters.length === 1){
        return true;
    }
    
    var len = letters.length;
    console.log("len: ", len);
    var half = Math.floor(len/2);
    
    var firstHalf = letters.slice(0, half);

    console.log("firstHalf: ", firstHalf);

    if(len % 2 === 0){
        var secondHalf = letters.slice(half);
    } else {
        var secondHalf = letters.slice(half + 1);
    }
    
    console.log("second half: ", secondHalf);


    if(firstHalf.join("") === secondHalf.reverse().join("")){
    	return true;
    }
    
    return false; 
};


console.log(isPalindrome(11));

// console.log([1,3].slice(1));