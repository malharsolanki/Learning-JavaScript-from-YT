// let a=300
// if (true){
//     let a=10
//     const b=20
//     console.log("Inner:",a);
    
// }


// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username="malhar"

//     function two(){
//         const website='youtube'
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()


// }

// one()


if (true){
    const username="malhar"
    if (username==="hitesh") {
        const website=" youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    
}

// console.log(username);


///Interesting
function addone(num){
    return num+1
}

addone(5)// this doesnt give error when function is called before declaration

const addtwo= function(num){
    return num+2
}
addtwo(5)   //// this  give error when function is called before declaration