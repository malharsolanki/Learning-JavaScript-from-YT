//if 
// if(true){
//     code gets executed
// }

// if(false){
//     code doesnt get executed
// }


// const isUserLoggedIn=true
// if (isUserLoggedIn){

// }


// <,>,<=,>=,==,!=,=== checks for type too, !== 
// if(2!=4){
//   console.log("executed");  
// }

// const score=200
// if (score>100) {
//   const power="fly"
//   console.log(`user power : ${power}`);
  
// }

// console.log(`user power : ${power}`);

const balance=1000
// if (balance>500) console.log("test"),
// console.log("test2");  //not good practice to write like this tbh

// if (balance<500) {
//     console.log("less than 500");
    
// } else if(balance<750){
//   console.log("less than 750");
  
// } else if(balance<950){
//   console.log("Less than 950");
  
// }else{
//   console.log("less than 1200");
  
// }

const isUserLoggedIn=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if(isUserLoggedIn && debitcard && 2==2){
  console.log("allow to buy");
  
}
if (loggedinfromemail || loggedinfromgoogle) {
  console.log("allowed to buy");
  
}