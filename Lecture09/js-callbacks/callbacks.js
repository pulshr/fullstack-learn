function doSomething(done) {
    console.log("1. Doing Something");
    done();
}
doSomething(()=>{
    console.log("2. It was done.");
})
console.log('3. End');