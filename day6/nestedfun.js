//! nested function 

var z = 100;
function outer(){
    console.log("start");
    let v = 100;
    let c = 200;
    console.log(v,c);
    let arr = () => {
        console.log("nested function");
    };
    console.log("end");
    //arr()
    return arr;
}
// let res = outer();
// res();

outer ()();


//! closure:

function f1(){
    let y = 200;
    function f2(){
        let x = 90;
        console.log(y);
        console.log(x);
    }
    f2();
}
f1();