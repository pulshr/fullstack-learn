function outer(param1) {
    let var1 = 10;
    function inner(param2) {
        let var2 = 20;
        console.log(param1,var1,param2,var2);
    }
    return inner;
}

let o1 = outer("param1");
o1("param2");