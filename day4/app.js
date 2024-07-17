let $ = 200;
var _ = 600;


console.log($);
console.log(_);

//! an identifier or keyword cannot immediately follow a numeric literal
 

// let 1a = 100;  //!it will show an error
// let typeof = 100; //!error
// let first name ="sachin"; //! error


//!output method in js

console.log("javaScript"); //! it will printed on the console window

document.write("helllo"); //! it will printed on the web page
document.writeln("resct js"); //! it will give some space after printing
document.write("anna");

//~ alert():
alert("alert message"); 

//~ confirm():
let re =confirm("are you 18+");
console.log(re);

//? prompt():
let userName = prompt("Please enter your name:");
console.log("Hello, " + userName + "!");
console.log(typeof userName);
