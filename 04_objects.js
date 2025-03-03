const tinderuser = new Object() //singleton object
//const tinderuser = {}  //non singleton object

tinderuser.id = "123abc"
tinderuser.name = "zubair"
tinderuser.isloggedin = false

//console.log(tinderuser);


const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "zubair",
            lastname: "sadhu"

        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {
    1:'a',2:'b'
}
const obj2 =  {
    3:'a',4:'b'
}
const obj4 = {
    5:'a',6:'b'
}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id:1,
        email:"zub@gmail.com"
    }
]

//users[1].email
console.log(tinderuser);


console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("islogdedin"));



const course = {
    coursename: "js in ",
    price: "999",
    courseinstructor: "zubair"
}

//course.courseinstructor


const {courseinstructor} = course
console.log(courseinstructor);

       //de structuring of the objects
// const navbar = ({company}) => {

// }


// navbar(): void
// navbar(company = "zubair")

        ///APIs in object formate
// {
//     "name":"zubair",
//     "course":"js in ",
//    "price":"free"
// }

         //objects in array
         //JSON >>>javascript object notation
[
    {},
    {},
    {}
]
