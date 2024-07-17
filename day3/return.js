function f3(a,b){
    return a+b;
}
let x = f3(10, 20 );
console.log(x);

function f4(){
    return 10, 20,30, 40; // it will always show the last value
    let x = 60; // after return the javascript is not been executed
    console.log(x);
}
let v = f4();
console.log(v);

function f5(){
    let x= 10;
    var y= 20;
    console.log(x,y);  // here the return statement is working implicitly which is called as "implicit return"
}
let v2 = f5();
console.log(v2);