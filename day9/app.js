let arr = [10,20,30,40,50,60];


//!find(): 
let arg1 = function(v,i,ar){
    console.log(v,i,ar);
    return v > 25;
};
let res1 = arr.find(arg1);
console.log(res1);

let res2 = arr.find((v,i,ar) => {
    return v > 60
}); 

console.log(res2);


//! findIndex():

let res3 = arr.findIndex((v,i,ar) => {
    return v > 30;
});

let res4 = arr.findIndex((v) => {
    return v > 80;
});


//! filter():

let a1 = [40,50,60,70,10,5,4];
let res5 = a1.filter((v,i,ar) => {
    return v > 20;
});

console.log(res5);

//!map():

let res6 = a1.map((v,i,ar) => {
    return v + 10 ;
});
console.log(res6);
console.log(a1);

let res7 = a1.map((v,i,ar) => {
    return v * 2;
});
console.log(res7);