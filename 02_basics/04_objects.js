// //objects in singleton
// // const tinderuser= new Object()
// const tinderuser={}

// tinderuser.id="123abc"
// tinderuser.name="Malhar"
// tinderuser.isloggedin= false

// // console.log(tinderuser)

// const reguser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Malhar",
//             lastname:"solanki",
//         }
//     }
// }

// // console.log(reguser.fullname.userfullname)
// // console.log(reguser.fullname)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// // const obj3= Object.assign(obj1,obj2)
// // console.log(obj3);

// // console.log(Object.assign({},obj1,obj2));// empty object{} acts as source
// // console.log(obj3);

// const obj4={...obj1,...obj2}//used maximum times
// // console.log(obj4);

// const users=[
//     {
//         id:1,
//         email:"m@s.com",
//     },
//     {
//         id:1,
//         email:"m@s.com",
//     },
//     {
//         id:1,
//         email:"m@s.com",
//     },
// ]

// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isloggedin'));


const course={
    coursename:"JS IN HINDI",
    price:999,
    courseteacher:"Hitesh",
}

const {courseteacher:teacher}=course /// destructuring mainly used in react 

// console.log(courseteacher);
console.log(teacher);

// {
//     "name":"Malhar",
//     "age":22,
//     "price":"free",
// }

[
    {},
    {},
    {},
]