//! IIFE
//! to avoid global pollution 
let a = 200;
console.log(a);

(function(){
    console.log("IIFE");
    let a = 100;
    console.log(a);
    console.log("End");
}) 
();


(function(){
    console.log("IIFE");
    let a = 500;
    console.log(a);
    console.log("End");
}) 
();


(function(){
    console.log("IIFE");
    let a = 300;
    console.log(a);
    console.log("End");
}) 
();



console.log(10+10);
console.log(10 +"10");
console.log(10 - "5");
console.log(10 -"str");
console.log("5" * "5");
console.log("10" / 2);
console.log(51 % 10);
console.log(104 % 5);