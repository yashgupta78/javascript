//! Simple program based on array and string 
//! 1) write program to find a first and second largest element in an array :
function firstandsecond(arr)
{
    if(arr.length < 2)
    {
        return "array should have two elements."
    }

let largest = -Infinity;
let second = -Infinity;
for(let num of arr)
    {
        if(num > largest)
            {
            second = largest;
            largest = num;
            }
        else if( num > second && num != largest)
            {
            second = num ;
            }
    }
return [largest , second];
}
const numbers =  [5,2,10,8,3];
const [first , second] = firstandsecond(numbers);
console.log("first largest : " , first);
console.log("second largest : " , second);