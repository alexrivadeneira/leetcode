    function convert(n, start){
        var roman = "";
        var curr = start;
        
        var romansArr = ["I", "V", "X", "L", "C", "D", "M"];
        
        if(curr !== "M"){
           next = romansArr[romansArr.indexOf(start) + 1];
        } else {
            next = "M";
        }

        // console.log("next", next);
        
        for(var i = 0; i < n; i++){
        	// weird cases at 4 and 9 positions
            if(i === 3 || i === 8){
                roman = curr + next;

            } else if(i === 4 || i === 9){
                roman = next;
                // console.log("next: ", next);
                next = romansArr[romansArr.indexOf(next) + 1];  
                // console.log("next next:", next);
            } else {
                roman += curr;
            }
        }
        
        return roman;
    }

// var test = ["A", "B", "C", "D"];
// console.log(test.indexOf("B") + 1);

console.log(convert(1, "I"));
console.log(convert(2, "I"));
console.log(convert(3, "I"));
console.log(convert(4, "I"));
console.log(convert(5, "I"));
console.log(convert(6, "I"));
console.log(convert(7, "I"));
console.log(convert(8, "I"));
console.log(convert(9, "I"));
console.log(convert(10, "I"));
console.log(convert(11, "I"));
console.log(convert(12, "I"));
console.log(convert(13, "I"));
console.log(convert(14, "I"));
console.log(convert(15, "I"));
console.log(convert(16, "I"));
console.log(convert(17, "I"));
console.log(convert(18, "I"));
console.log(convert(19, "I"));
