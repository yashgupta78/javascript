//!string

let str = "Javascript";
console.log(str.length);
console.log(str[0]);

// for (let i = 0; i < Attr.length; i++) {
//   console.log(str[i]);
// }

// for (let v of str) console.log(v);
// for (let i in str) console.log(i);

let r1 = str.slice(0, 4);
console.log(str);
console.log(r1);

let r2 = str.substring(5);
console.log(str);
console.log(r2);

let r3 = str.substr(5, 2);
console.log(r3);

let st = "This is JavaScript class and we learn JavaScript";
let r4 = st.replace("JavaScript", "React");
console.log(r4);

let r5 = st.replaceAll("JavaScript", "React");
console.log(r5);

let s = "PYTHON";
let r6 = s.toLowerCase();
console.log(r6);

let v = "java";
let r7 = v.toUpperCase();
console.log(r7);

let x = "     Hello world!!!!    ";
let r8 = x.trim();
console.log(r8);
console.log(x.trimEnd());
console.log(x.trimStart());

let r9 = str.split("a");
console.log(r9);

let y = "hello world";
let r10 = y.split(" ");
console.log(r10);

//!Reversing an string

let str2 = "javascript";
let r = str.split(" ");
r.reverse();
let res10 = r.join(" ");
console.log(res10);

let res11 = str.split("").reduceRight((acc, cv) => acc + cv, "");
console.log(r2);

let r11 = str.charAt(3);
console.log(r3);

let r12 = str.charCodeAt(3);
console.log(r12);

console.log(str.includes("i"));
console.log(str.includes("a", 4));