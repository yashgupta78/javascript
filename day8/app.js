//!Array In-built function/methods:

let a = () => {
    console.log("Arr function");
};
console.log(typeof a);
let ar = [10, 20, 30];
console.log(typeof ar);
let num = 30;
let x = Array.isArray(ar); // isArray() is a static method so we can access with the help of classname
console.log(x);

//! non-static methods:

//! push() and unshift():
let arr = [10, "js", true, 100n, [90]];
console.log(arr.length);

let res1 = arr.push(30, 70, 80);
let res2 = arr.unshift("str", "js");
console.log(res1);
// console.log(res2);
console.log(arr);

//! pop() and shift() methods:

let fruits = ["apple", "watermelon", "banana"];
var res3 = fruits.pop();
// console.log(res3);
console.log(fruits);

let res4 = fruits.shift();
console.log(res4);
console.log(fruits);

//! slice():
let v = [10, 20, 30, 40, 50, 60];
let res5 = v.slice(1, 3);
console.log(res5);
console.log(v);
console.log(v.slice(3));

//concat():
let a1 = [10, 20];
let b1 = [30, 40];
let c1 = [50, 60];
let d1 = a1.concat(b1, c1);
console.log(a1);
console.log(d1);

let v1 = [50, 60, 70, 80, 90, 100];
delete v[1];
console.log(v1.length);

//! splice():
let v2 = [10, 20, 30, 40, 50, 60];
let res6 = v2.splice(1, 3, "Js", "java", "html", "css ");
console.log(res6);
console.log(v2);

//!  indexOf():
const array1 = [10, 20, 30, "js", "node", 20, 10];
console.log(array1.indexOf(10, 2));
