// //primitive-- reference type
// //7 types
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint


// //reference type-non primitive
// 1. array
// 2. object
// 3. functions
// let username=undefined
// console.log(typeof username);


// const id=Symbol('123')
// const newid=Symbol('123')

// console.log(id===newid); //symbol gives unique address to variables

// const heros=['homelander', 'speed', 'uniqlo']
// let myobj= {
//     name:"malhar",
//     age:21,
// }

// console.log(typeof myobj)


////////////////////////////////////
// memory two types- stacks and heaps
// primitive type-> stack 
// heap-> non primitive 

// let myname="malhar solanki"
// let anothername=myname
// anothername="dhrumil"
// console.log(myname);
// console.log(anothername);


let userone={
    name:"user",
    upi:"user@upi"
}


let usertwo=userone
usertwo.name="malhar"

console.log(userone.name);
console.log(usertwo.name);
