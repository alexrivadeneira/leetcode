var removeDuplicates = function(nums) {
    // remove duplicates in place
    // return the length
    // don't create another array

    var prev = nums[nums.length - 1];
    
    for(var i = nums.length; i >= 0; i--){
    	if(nums[i] === prev){
    		nums.splice(i, 1);
    	} else {
    		prev = nums[i];
    	}
    }
    
    return nums;
        
};

console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([1,2,2,2]));
console.log(removeDuplicates([]));