var isPalindrome = function(x) {
	var x = x.toString();
    var len = x.length;
    var half = Math.floor(len/2);
    console.log(half);
    
    for(var i = 0; i < half; i++){

        if(x[i] !== x[len - 1 - i]){
            return false;
        }
    }
    
    return true;
};

console.log(isPalindrome(121121));