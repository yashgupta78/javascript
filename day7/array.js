//! array: 

//heterogenous array : 


const ar = [10, 20, true, () => 10, ["str" , "js"]];
console.log(ar.length);


//homogenous array 

let fruits = ["apple" , " Jackfruit" , " orange" , " mango"];
console.log(ar.length);



let a = [
    10,
    "js",
    true,
    () => "arr",
    {name: " Sachin"}, 
    [10,20,30],
    undefined,
    null,
    10n
];


console.log(a.length);
a[9] = "react" ; //adding the element in the array
a[15] = "node";

console.log(a[4]);
console.log(a[3]());

a[2] = false ; // changing the element in the array
delete a[7]; //deleting an element in an array 
console.log(a);
console.log(a[7]);


