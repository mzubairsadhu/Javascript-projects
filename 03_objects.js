// singleton //constructor always make it

//object literals
//Object.create  or
const mysym = Symbol("key1")

const jsuser = {
      name: "zubair",
      age: 18,
//when the symbol is use in the object
      [mysym]: "key1",
      location: 'chiniot',
      email: "abc@gmail.com",
      isloggedin: false,
      lastloggedindays: ['monday' , 'saturday']

}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);


jsuser.email = "zubair@gmail.com"
jsuser.freeze(jsuser)
//after freeze the value can not change
jsuser.email = "hsga@gmail.com"
console.log(jsuser);

jsuser.greeting = function(){
      console.log(`hello js user, ${this.name}`);
      
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());




