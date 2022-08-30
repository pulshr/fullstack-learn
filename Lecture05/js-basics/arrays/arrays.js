let arr = [1,2,3,4,5];
//Prints arr
console.log(arr);
//Prints len
console.log(arr.length);
//heterogeneous array
let htrArr = [2,"Hello",[3,4,5],false];
//type is object
console.log(typeof(htrArr));
console.log(htrArr);
for(let val of arr) {
    console.log(val);
}
for(let index of arr) {
    console.log(index);
}
//Add and remove at last index
let fruits = ["apple","mango"];
console.log(fruits);
fruits.push("melon");
console.log(fruits);
fruits.pop();
console.log(fruits);
//Add and remove at first index
let cars = ["Camary","Baleno","Ciaz","Nexon"];
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Swift");
console.log(cars);

//Arrays: Data Changing
let gadgets = ["smartphone","tv","washing machine","refrigerator"];

//slice method is non destructive
console.log(gadgets.slice(2));
console.log(gadgets.slice(2,3));

//splice method mutates the array
console.log(gadgets.splice(2));
console.log(gadgets);

// splice can take another value as argument to specify length it will slice
gadgets = ["smartphone","tv","washing machine","refrigerator"];
//taking "washing machine" out
console.log(gadgets.splice(2,1));
console.log(gadgets);