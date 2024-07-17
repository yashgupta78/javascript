//! reduce():
let arr = [10,20,30,40,50];
let res1 = arr.reduce((acc, cv) => {
    console.log(acc , cv);
    return acc + cv;
} , 5) //initial value of accumlator which is optional 
console.log(res1);



//! reduceright():  
let res2 = arr.reduceRight((acc, cv) => {
    console.log(acc, cv);
    return acc + cv;
}, 5);
console.log(res2);


//!sort():
let a = ["mango", "apple" , "Orange" , "melon"];  //for array 
a.sort();
console.log(a);

//sort method for number

let number = [ 10,9,1000,252, 68,70]
number.sort((a,b) => {
    return b - a ;
});
console.log(number);


//!flat():  
//it is used to convert multi dimension array to single dimension array 
const v = [10,20,["str",["JS" , "chop"], 40],50,["react"]];
let r1 = v.flat()
let r2 = v.flat()
console.log(r2)

let r3 = v.flat(2); //it include the depth vlaue by using this you not need to pass the flat method again and again
console.log(r3);

//!include():

let r4  = r3.includes(10,2) //it will check the value and return boolean value
console.log(r4)


//!fill():

let ar = [20 , "hello world", 90,true,undefined,null,100n,() => {},false,[10,30]]
ar.fill("str" , 4,7)
console.log(ar)
  