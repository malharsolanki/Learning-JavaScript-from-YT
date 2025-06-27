//array
const myarray= [1,2,3,4,5,true,"malhar"]
const heros=["shaktiman", 'malhar','hojmelander']

const myarray2= new Array(1,2,3,4,"malhar")


// console.log(myarray[1]);
// console.log(myarray.length);


myarray.push(6,"malhar")
// console.log(myarray);



//Array methods

// myarray.pop()
// myarray.unshift(10)
// myarray.shift()
// console.log(myarray.includes(9));
// const newArr=myarray.join()

// console.log(myarray);
// console.log(newArr);

//slice,splice

console.log("A",myarray);
const myn1= myarray.slice(1,3);
console.log(myn1);
console.log("B",myarray);

const myn2=myarray.splice(1,3)
console.log(myn1);

console.log(myn2);



