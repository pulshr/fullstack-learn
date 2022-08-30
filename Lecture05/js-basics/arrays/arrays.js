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