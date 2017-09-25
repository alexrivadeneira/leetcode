
var odd = [1,2,3,4,5];
var even = [1,2,3,4,5,6];

var evenLen = Math.floor(even.length / 2);
var oddLen = Math.floor(odd.length / 2);

console.log(evenLen);
console.log(oddLen);

// var evenFirstHalf = even.slice(0, evenLen);
// var evenSecondHalf = even.slice(evenLen);
// console.log(evenFirstHalf);
// console.log(evenSecondHalf);

var oddFirstHalf = odd.slice(0, oddLen);
var oddSecondHalf = odd.slice(oddLen + 1);
console.log(oddFirstHalf);
console.log(oddSecondHalf);