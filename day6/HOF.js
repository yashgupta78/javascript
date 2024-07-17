//! HOF and CallBack Function:
//!example 1 :


function HOF(demo, a){
    let b = 20;
    let c = 30;
    console.log(b,c);
    demo();
    console.log(a);
}
HOF((y) => console.log("call back function", 200));

//! Example 2:
let sum = (a,b) => a+b;
let sub =(a,b) => a-b;

let ar = (sum,sub) => {
    console.log(sum(10,20));
    console.log(sub(200, 100));
};
ar(sum,sub);

