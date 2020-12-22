/*

You are a bouncer who controls access to a nightclub. 
To perform your work, create a function that allows you to check if any customer is eligible to enter:

You can't let anyone with white socks into the club. 
It is also a requirement to wear shoes (not sneakers) to enter. 
Also, people under 18 years old are not allowed to enter. 

The function will receive an object describing the age, shoes and socks of the person who wishes to enter the club.

*/
var age= 18

function bouncer (person){
  
  if (age < 18){
    console.log("You cannot enter in this club");
  } else{
    console.log("Come in! Have fun!");
  }
}
var shoes = "yes"
function bouncer (person){
  
  if (shoes = "yes"){
    console.log("Come in! Have fun!");
  } else{
    console.log("You cannot enter in this club");
  }
}
var socks = "white"
  
function bouncer (person){
  
  if (socks != "white"){
    console.log("Come in! Have fun!");
  } else{
    console.log("You cannot enter in this club");
  }
  
};
console.log(bouncer(18,"yes","white"));
console.log(bouncer(17,"yes","white"));