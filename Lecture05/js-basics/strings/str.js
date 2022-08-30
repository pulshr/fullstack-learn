let mainStr = "This is a Long String."
//Prints "Long"
console.log(mainStr.slice(10,14));
console.log(mainStr.substring(10,14));
//slice also works with negative index (form reverse)
//Prints "String"
console.log(mainStr.slice(-7,-1));
//Prints "is" (this method is now deprecated)
console.log(mainStr.substr(5,2));