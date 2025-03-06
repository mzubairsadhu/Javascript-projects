const user = {
    username :"zubair",
    price: 99,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }



}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

console.log(this);


// function chai() {
//     let username = "zubair"
//     console.log(this.username);
    
// }

// chai()



// const chai = function () {
//     let username = "zubair"
//    console.log(this.username);
    
// }

const chai = () => {
    let username = "zubair"
    console.log(this);
    
}


//chai()


//>>>>>Basic arrow function

//this is also called explicite return when the return is used

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }



//>>>>>>>>>this is the second method of the arrow functions

//this is also called implicite return when retun is not writtan
// const addtwo = (num1 , num2) => num1 + num2



//>>>>>>>>>>this is the third method of the arrow functions

const addtwo = (num1, num2) => (num1+ num2)

//but object is wretten in the paranthese

console.log(addtwo(3,4));



