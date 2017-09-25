var higherObj = {
	bar: "antono"
};


Object.defineProperty(higherObj,
	"foo",
	{
		writable: false,
		value: "sex", 
		enumerable: true
	}
);

var lowerObj = Object.create(higherObj);


lowerObj.dick = 122;
lowerObj.bar = "anthony";
lowerObj.baz = "hello world";


Object.defineProperty(lowerObj, "foo",
	{value: 6999, enumerable: true});

lowerObj.foo = "hi boys";

// Object.defineProperty(lowerObj,
// 	"foo",
// 	{
// 		value: 70
// 	}
// );

// console.log(lowerObj);
// console.log(higherObj);

for(var item in higherObj){
	console.log(item, higherObj[item]);
}

console.log("=====");

for(var item in lowerObj){
	console.log(item, lowerObj[item]);
}

console.log(lowerObj);

// console.log("lower: ", lowerObj);