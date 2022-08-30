function check() {
    //will print global scope
    console.log(this);
}
let obj = {
    a: true,
    b: 1,
    c: "AZ",
    d: function() {
        //here scope is object
        console.log(this);
    }
}

check();
obj.d();

let obj1 = {
    false: true,
    10: "Yes"
}

//to access 'false' property of obj1, have to use it as a string
console.log(obj1['false']);
console.log(obj1['10']);