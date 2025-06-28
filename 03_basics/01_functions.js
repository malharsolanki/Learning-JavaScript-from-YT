
function saymyname(){
console.log("M");
console.log("A");
console.log("L");
console.log("H");
console.log("A");
console.log("R");

}

// saymyname()

// function addtwonos(number1,number2){
//     console.log(number1+number2);
    
// }
function addtwonos(number1,number2){
//    const result=number1+number2
//    return result;
//    console.log("Result is");
    return number1+number2
    
}

// addtwonos(1,2)
// addtwonos(1,"2")
// addtwonos(1,"a")
// const result=addtwonos(2,5)
// console.log("Result is:", result);

function loginusermsg(username){
    if(username=== undefined){ //!username is same as this
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// loginusermsg("Malhar")
// console.log(loginusermsg())


// function calculatecartprice(...num1){
//     return num1
// }
function calculatecartprice(val1,val2,...num1){  //1st goes to val1 second goes to val2 and other goes to num1
    return num1
}

// console.log(calculatecartprice(200,300,400));

const user={
    username:"Malhar",
    price:100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"Sam",
    price:123
})

const mynewarray=[200,400,100,600]

function returnsecondvalue(getArray){
    return getArray[1]

}

console.log(returnsecondvalue(mynewarray));
