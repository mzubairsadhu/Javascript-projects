//const coding = ["js", "ruby", "java", "python, cpp"]


//foreach can not return the values

// const values = coding.forEach((item) =>{
//    // console.log((item));
//     return item
// })

// console.log(values);



// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = mynum.filter((num) => {
//     return num> 4
// })
// console.log(newnums);



// const newnums = []

// mynums.forEach(num => {
//     if (num >4) {
//         newnums.push(num)
//     }
// });

// console.log(newnums);


// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newnumber = mynum.map((num) => num + 10)
// // console.log(newnumber);



// const newnums = mynum.map((num) => num *10)
// .map((num) => num + 1)
// .filter((num) => num >= 40)


// console.log(newnums);





/************reduce******** */

const mynums = [1, 2, 3]

const mytotal = mynums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
} , 0)
console.log(mytotal);

