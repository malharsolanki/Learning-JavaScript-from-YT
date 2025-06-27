// singleton
//Object.create()


//object literals

const mysym=Symbol("Key")
const jsuser={
    name:"malhar",
    [mysym]:"Mykey1",
    "full name":"Malhar Soalnki",
    age:22,
    location:"Borsad",
    email:"meet@gmail.com",
    isloggedin:false,
    lastlogin:[1,2,3,4],
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// // console.log(jsuser.full name);// wont be accessible
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);


// jsuser.email="meet@hotmail.com"
// Object.freeze(jsuser)
// jsuser.email="meet@fb.com"

// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS USER");
    
}
jsuser.greetingtwo = function(){
    console.log(`Hello JS USER ${this.name}`);
    
}

// console.log(jsuser.greeting);// gives undefined
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

