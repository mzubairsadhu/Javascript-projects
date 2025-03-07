// if 

// const isuserloggedin = true

// if (2 == "2") {
//     console.log("executed");
    
// }



2<=2
//<,>,<=, >=, ==, !=, ===




// const temp = 41

// if (temp<50) {
//     console.log("less then 50");
    
// }else{
// console.log("temp is greater then 50");
// }




// next

// const score = 200

// if (score> 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }



// short hand notation but it is not best method or practice

// const balance = 100
// if (balance>500) console.log("test"),
// console.log("test2");




// if (balance < 500) {
//     console.log("less then 500");
    
// } else if (balance < 750) {
//     console.log("less then 750");
    
// } else if (balance < 900) {
//     console.log("less then 750");
    
// } else{
//     console.log("less then 1200");
    
// }



const userloggedin = true
const debetcard = true
const loggedinfromgoogle = true
const loggedinfromemail = true


if (userloggedin && debetcard) {
    console.log("allow to buy course");
    
}
if (loggedinfromemail || loggedinfromgoogle) {
    console.log("allow the user to logged in");
    
}

