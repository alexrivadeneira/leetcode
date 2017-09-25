/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x.length === 1){
        return true;
    }
    var letters = x.toString().split("");
    var len = letters.length;
    var half = Math.floor(len/2);
    
    var firstHalf = letters.slice(0, half);

    if(len % 2 === 0){
        var secondHalf = letters.slice(half);
    } else {
        var secondHalf = letters.slice(half + 1);
    }
    
    if(firstHalf.join("") === secondHalf.reverse().join("")){
    	return true;
    }
    
    return false; 
};