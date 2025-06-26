const account_ID = 123123;
let accountemail = "malhar@solanki.com";
var accountpassword = "123456789";
let accountstate;
accountcity = "Anand";

// account_ID=2 //not allowed
accountemail = "meet@gmail.com";
accountpassword = "12312313131";
accountcity = "Borsad";

console.log(accountemail);
console.table([account_ID, accountemail, accountpassword, accountcity]);


// Dont use var. only use const and let bcoz of issue in block and functional scope.