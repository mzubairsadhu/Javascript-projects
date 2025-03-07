//for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best no");
        
//     }
//     console.log(element);
    
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         //const element = array[j];
//         //console.log(`inner loop value: ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + "=" +i*j);
        
//     }
    
    
// }



// let myarry = ["flash", "batman", "superman"]
// for (let index = 0; index < myarry.length; index++) {
//     const element = myarry[index];
//     console.log(element);
    
// }



// break and continue


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
        
    }
    console.log(`value of i is ${index}`);
}   

//break>>>>>>>>
//when index is detected then no further execute th program


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
    
}

//continue>>>>>>>>>>
//give a one chance to the program to execute the programe
//program is execte the one index further
