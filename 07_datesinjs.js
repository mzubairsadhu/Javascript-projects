//Dates

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset());
// console.log(mydate.getHours());



console.log(typeof mydate);

let mycreatedate = new Date(2025, 3, 1)
console.log(mycreatedate.toDateString());


let newdate = new Date("2023-01-14")
console.log(newdate.toLocaleDateString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatedate.getTime());

console.log(newdate.toLocaleString('default',{
    weekday: "long",
    //timeZone: ""
}));



