const useremail = "abc@gmail.com"

if (useremail) {
    console.log("got user email");
    
}else
{
    console.log("Dont have user email");
    
}


// falsy value


// false, 0 , -0, bigint 0n, null, "", null, undefined,NaN

// truethy value

// "0", "false", " ", [], {}, function(params) {}


// if (useremail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}


//nulish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1);



//ternary operator 

//condition ? true: false

const iceteaprice =100
iceteaprice >= 80 ? console.log("less then 80") : console.log("more then 80");

