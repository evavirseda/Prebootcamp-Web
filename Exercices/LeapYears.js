/*
Your mission will be to create two functions:

1. Create a function that checks if a year is a leap year. 
2. Create a function that takes the number of leap years between two given years by console. 

*/

function checkLeapYear (year){
  if (year % 4 === 0){
    console.log("This is a leap year");
  } else {
    console.log("This is not a leap year");
}
};
console.log(checkLeapYear(2020));


function numberOfLeapYears(initialYear, endYear) {
  var leapYears = [];
  
  for (var i = initialYear; i <= endYear; i++) {
    if (i % 400 === 0) {
      leapYears.push(i);
    } else if (i % 4 === 0 && !(i % 100 === 0)) {
      leapYears.push(i);
    }
  }
  return leapYears
};

console.log(numberOfLeapYears(1989, 2020));
