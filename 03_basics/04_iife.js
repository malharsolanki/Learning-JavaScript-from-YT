//IIFE immediately invoked function expression

(function chai(){
    //named iife
    console.log(`DB connected`);
    
})();

//while writing two iife together use a semicolon at the end of the first iife otherwise itll give error

((name)=>{
    //unnamed iife
    console.log(`DB connected two ${name}`);
    
})("malhar")
