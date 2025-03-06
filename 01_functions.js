
function saymyname() {
    console.log("h");
console.log("i");
console.log("j");


}
//saymyname()
//    when function is decleared then () is called parameter
// function addtwonumber(number1, number2) {
//     console.log(number1 + number2);
    
// }






function addno(number1, number2) {
    let result = number1 + number2
    return result
}


//   when call the value then () is called arrgument
const result = addno(3, 4)
console.log("result: " , result);

function loginuser(username) {
    if(username===undefined){
        console.log('please enter a username ');
        return
        
    }
    return `${username} just login`
}

//console.log(loginuser("zubair"));
// console.log(loginuser());

//...is called rest operator or spread operator
function calculatecardprice(...num1) {
    return num1
}

console.log(calculatecardprice(200, 300, 400));
//only give the first value in the parameter

//when show the more then one values for one parameter then is called rest operator is used


function cartprice(val1, val2, ...num2) {
    return num2
}
console.log(cartprice(200, 300, 400, 500));

//starting values store in the variables and the last two values are store into the rest operator

const user = {
    username: "zubair",
    price: 199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price ${anyobject.price} `);
    
}

handleobject(user)

handleobject({
    username: "sam",
    price: 399
})

const mynewarray = [200, 100, 300, 400]
function returnsecondvalue(getarray) {
    return getarray[3]
}

console.log(returnsecondvalue(mynewarray));
