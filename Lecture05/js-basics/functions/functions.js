function a() {
    return 1;
}
let b = function (){
    return 4;
}

//Polymorphism
function area(length,breadth) {
    if(typeof breadth==='undefined') {
        return Math.PI*length*length;
    }
    return length*breadth;
}
console.log("Area of Circle",area(5));
console.log("Area of Rectangle",area(2,4));

function hello() {
    console.log("Hello",arguments);
}

hello(1,2);