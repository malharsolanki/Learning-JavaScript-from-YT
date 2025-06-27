const heros=["thor","batman","Ironman"]
const indi=["shaktiman","nagraj","bhootnahth"]

// heros.push(indi)
// console.log((heros));
// console.log((heros[3][1]));

// const allheros=heros.concat(indi)
// console.log(allheros);


// const all_heros=[...heros,...indi]
// console.log(all_heros);


const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray=anotherarray.flat(Infinity)

console.log(realanotherarray);

console.log(Array.isArray("malar"));
console.log(Array.from("malar"));
console.log(Array.from({name:"Malhar"}));  //interesting case

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
