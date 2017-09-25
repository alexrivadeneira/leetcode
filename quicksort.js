var myArray = [6, 22, 999, 14, 3, 15, 87, 20];

// select pivot, and move all elements based on whether they are higher or lower

function quickSort(myArray){

	var pivotItem = myArray[myArray.length - 1];
	var smaller = [];
	var larger = [];
	var newArray = [pivotItem];

	// console.log(pivotItem);

	if(myArray.length > 1){
		for(var i = 0; i < myArray.length; i++){
			if(myArray[i] < pivotItem){
				smaller.push(myArray[i]);
			} else if (myArray[i] > pivotItem){
				larger.push(myArray[i]);
			}

		}
		console.log("Smaller: ", smaller, "larger: ", larger);
		return [quickSort(smaller), pivotItem, quickSort(larger)];

	}	


	else if (myArray.length == 1){
		return myArray[0];
	} else {
		return;
	}
	

}

console.log(quickSort(myArray));