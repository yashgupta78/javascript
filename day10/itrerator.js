let arr =[10,20,30,40,50,90];
for (let v of arr){
    console.log(v);
}


for(let i in arr){
    console.log(i , arr[i]);
}

let k = arr.keys();
console.log(k);
for(let key of k){
    console.log(key);
}

let v = arr.values();
console.log(v);
for(let value of v){
    console.log(value);
}

let e  = arr.entries();
console.log(e);


for (let entry of e){
    console.log(entry);
}

let ar =  [100,"str" , 20n,true,false]
let r1 = ar.lastIndexOf("str" , 4);
console.log(r1);