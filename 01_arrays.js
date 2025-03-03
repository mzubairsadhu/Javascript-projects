//array

const myarray =[0, 1, 1, 2, 4, 5]

console.log(myarray[0]);

const myheros = ['zubair', 'ali']
const myarr1 = new Array(1, 2, 3, 4)

console.log(myarr1[3]);



//methods of array

// myarr1.push(6)
// myarr1.push(2)
// myarr1.pop()

// myarr1.unshift(9)
//myarr1.shift()

console.log(myarr1.includes(9));
console.log(myarr1.indexOf(3));


const newarrr = myarr1.join()

console.log(myarr1);
console.log(newarrr);



//console.log(myarr1);


//slice., splice
//=> slice cannot manupulate the original array and range index is not include
console.log("a",myarr1);
const myarr2 = myarr1.slice(1,3)
console.log(myarr2);
console.log("b", myarr1);

//splice manupulate the original array or change the indexes of the array and the range index is also include
const myarr3 = myarr1.splice(1,3)
console.log(myarr1);

console.log(myarr3);

//prototype => methods of the array or other data types
