    function convert(n){
        var roman = "";
        var curr = "I";
        
        var romansArr = ["I", "V", "X", "L", "C", "D", "M"];
        
        if(curr !== "M"){
           next = romansArr[romansArr.indexOf(curr) + 1];
        } else {
            next = "M";
        }

        // console.log("next", next);
        // BASE PATTERN, and then use recursion to start repeating and acculumating


        for(var i = 1; i < n; i++){
        	// weird cases at 4 and 9 positions
            if(i === 4 || i === 9){
                roman = curr + next;

            } else if(i === 5){
                roman = next;
                // console.log("next: ", next);
                next = romansArr[romansArr.indexOf(next) + 1];  
                // console.log("next next:", next);
            } else if (i === 10){
                next = romansArr[romansArr.indexOf(next) + 1];
                roman += next;
            } else {
                roman += curr;
            }
        }
        
        return roman;
    }

// var test = ["A", "B", "C", "D"];
// console.log(test.indexOf("B") + 1);

console.log(convert(1));
console.log(convert(2));
console.log(convert(3));
console.log(convert(4));
console.log(convert(5));
console.log(convert(6));
console.log(convert(7));
console.log(convert(8));
console.log(convert(9));
console.log(convert(10));
console.log(convert(11));
console.log(convert(12));
console.log(convert(13));
console.log(convert(14));
console.log(convert(15));
console.log(convert(16));
console.log(convert(17));
console.log(convert(18));
console.log(convert(19));
