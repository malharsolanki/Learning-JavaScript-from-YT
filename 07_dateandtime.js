let date=new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(typeof date);


// let mydate=new Date(2023,0,23)
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());

let newdate=new Date("2025-04-22")
// console.log(newdate.toLocaleDateString());
let timestamp=Date.now()
// console.log(timestamp);
// console.log(newdate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let date1=new Date()
console.log(date1.getMonth()+1);

date1.toLocaleString('default', {
    weekday:"short",

})

console.log(date1);
