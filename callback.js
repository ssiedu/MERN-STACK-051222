function sum(a,b,x){
    console.log(a+b);
    x("Hello world");
}

sum(10,20, (hello) => {
    console.log("call back function");
    console.log(hello);
});

demo =  () => {
    console.log("Demo function");
}

demo();