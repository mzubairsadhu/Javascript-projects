const score = 480
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length.toFixed(2));


const othernumber = 23.8966
console.log(othernumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString());


//**************maths****** */

console.log(Math);
console.log(Math.abs(-4));
//abs is used for absolute value convert the negative value in to positive value
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.max(1,2,1));
console.log(Math.min(4,54,5));
console.log(Math.floor(Math.random()*10));

//math.random give value btw 0 and 1
//floor give the lover value always
//

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min+1)) + min);



