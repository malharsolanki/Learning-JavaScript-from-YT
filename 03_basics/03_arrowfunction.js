//this keyword and arror function

const user={
    username:"Malhar",
    price:999,
    welcomemsg:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}

// user.welcomemsg()
// user.username= "Dhrumil"
// user.welcomemsg() //context changed

// console.log(this);

// function chai(){
    //     let username="malhar"
    //     console.log(this.username);
    
    // }
    
    // chai()
    
    // const chai=function(){
        
    //     let username="malhar"
    //     console.log(this.username);

    // }
    // const chai=()=>{
        
    //     let username="malhar"
    //     console.log(this);

    // }

    // chai()
// BASIC ARROW FUNCTION
    // const addtwo=(num1,num2)=>{
    //     return num1+num2        
    // }
    // const addtwo=(num1,num2)=>{
    //     return num1+num2
    // }


//another method of arrow funciton


// const addtwo=(num1,num2) => num1+num2   //for a single line of code  agar curly braces mein wrap kara to compulsorily return keyword likhana hi padega 

// const addtwo=(num1,num2) => (num1+num2 ) //brackets mein return likhne ki zarurat nhi

const addtwo=(num1,num2) => ({username:"malhar"} )




   console.log( addtwo(3,5));



   