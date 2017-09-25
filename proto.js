var myFunc = function(){

};


console.log(myFunc.prototype);

var a = new myFunc();

myFunc.prototype.alex = 239;



console.log("a.prototype", a.prototype);
console.log(Object.getPrototypeOf(a) === myFunc.prototype);