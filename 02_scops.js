// let a = 10
// const b = 20
// var c = 30

//{} currly braces is called scope

//from here
if (true){
    let a = 10
    const b = 20
    var c = 30
}
//is block scope

//outside the function the value is the globel scope
//the global scope variable is access in the block scope

//scope is total change for windows and the node


// console.log(a);
// console.log(b);
console.log(c);

//console print the value of the c this is the scope issue 
//butt a and b is nort print in the console because in the var the scope issue of the variable
//the scope of a , b and c in the {} only



//*************nestted scope************** */

function one() {
    const username= "zubair"

    function two() {
        const website = "E-commerce"
        console.log(username);
        
    }
    //console.log(website);       //example of ice creame //it can not print
    two()


}

one()




if (true) {
    const username = "zubair"
    if (username == "zubair") {
        const website = "  e-commerce"
        console.log(username + website);
        
    }
    //console.log(website);  // cannot print the website because the scope of the website is only in the if statement
    
}

//console.log(username);     //username is not print because of the scope of if statement


/******************interesting******************* */

console.log(addone(5));

function addone(num) {
    return num + 1
}

//console.log(addone(5));

//addone(5)

const addtwo = function(num) {
    return + 2
}

addtwo(5)


//when the function is decleared ass variable then it can not access before it
//but when it is decleared as function then it can access before the function declaration

