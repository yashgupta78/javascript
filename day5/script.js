"use strict";
// ! local scope :

let x = 10;
var y = 20;
const z = 30;

console.log(x);
console.log(y);
console.log(z);

function demo( x, y){
    let a = 10;
    var b = 20;
    const c = 30;
    console.log(a, b, c);
    return c - b;
}
demo(100, 200);

{
    let p = "str";
    const q = "js";
    var s = "ssd";
}
console.log(s);