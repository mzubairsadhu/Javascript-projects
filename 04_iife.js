//immediate invoked function expression(IIFE)


(function chai(params) {
    console.log(`DB connected`);
    
})

//chai()

//()()

( function chai() {
    //named iife
    console.log(`DB connected`);
    
}) ();
 //unname iife
( (name) => {
    console.log(`DB connected two ${name}`);
    
}) ("zubair")
