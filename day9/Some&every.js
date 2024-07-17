//! some():

let v = [50,60,20,15,79,68];
let r1 = v.some((v,i,ar) => {
    console.log(v);
    return v > 70;
})
console.log(r1);


//! every():

let r2  = v.every((v,i,ar) => {
    return v > 100;
})
console.log(r2);

