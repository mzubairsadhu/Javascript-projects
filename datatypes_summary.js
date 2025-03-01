
//two types permitive and non permitive for store data in memory

// permitive call by value
//7 types
//string 
//number
//boolean
//null
//undefined
//symbol
//bigint

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null
let useremail ;
//const id = Symbol('12313')
///const anotherid = symbol('12313')
//console.log(id == anotherid)
const bignumber = 13131313n

//JavaScript is dynamically typed.


//non permitive or reference data types //call by referance ///it is also the objects
//arraays
//objects
//functions


const heros = ['zubair', 'ali'];

let myobj = {
    name: "zubair",
    age: 21
}

const myfunction = function(){
    console.log("hello");
    

}

console.log(typeof bignumber);


//read the retun types of all data types


//****************memory************* */

//stack(permitive)==>copy
//heap(non permituve)==>referance

let zubairname = "zibair"
let anothername = "sadhu"
anothername = "ch"
console.log(zubairname);

console.log(anothername);

let user = {
    email: "abc@gmail.com", 
    phone: "038221363263"
}

let usertwo = user

usertwo.email = "cbs@gmail.com"
console.log(user.email);
console.log(usertwo.email);

