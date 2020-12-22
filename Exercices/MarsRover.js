/*
You must perform up to iteration 4 of the Mars Rover Kata. 
That are summarized in:
● Create a Rover object 
● Create the function that makes the rover turn 
● Create the function that makes the rover go forward or backward 
● Create the function that reads a string and sends forward or turn operations
*/


/*1 Create a rover*/
let rover = {
  direction:'N',
  x: 0,
  y: 0,
  travelLog:[{x:0,y:0}],

 };


/*2 Create the function that makes the rover turn*/
function turnLeft(rover) {
  switch(rover.direction){
    case 'N':rover.direction = 'W'
    break;
    case 'W':rover.direction ='S'
    break;
      
    case 'S':rover.direction='E'
    break;
      
    case 'E':rover.direction='N'
    break;
  }
}
console.log('turnLeft was called!');

function turnRight(rover) {
 switch(rover.direction){
   case 'N':rover.direction ='E'
 break;
   case 'E':rover.direction= 'S'
 break;
   case 'S':rover.direction='W'
  break;
   case 'W':rover.direction='N'
    break;
 }
}
console.log('turnRight was called!');


/*3 Create the function that makes the rover go forward or backward */
function moveForward(rover) {
  switch(rover.direction){
  case 'N':
   rover.y -=1;
  break;
  case 'W':
   rover.x-=1;
  break;
  case 'S':
   rover.y+=1;
  break;
  case 'E':
   rover.x+=1;
  break;
  }
  console.log('Next position:'+ rover.x +',' + rover.y);
  
  rover.travelLog.push({x: rover.x,y: rover.y});
  
}
function moveBackward(rover) {
  switch(rover.direction){
  case 'N':
   rover.y +=1;
  break;
  case 'W':
   rover.x+=1;
  break;
  case 'S':
   rover.y-=1;
  break;
  case 'E':
   rover.x-=1;
  break;
  }
  console.log('Next position:'+ rover.x +',' + rover.y);
  
  rover.travelLog.push({x: rover.x,y: rover.y});
  
}

/*4 Create the function that reads a string and sends forward or turn operations*/

function Commands (command) {
  for (let i=0; i<command.length; i++) {
    if (command[i] === 'F') {
      moveForward(rover); 
    }
    else if (command[i] === 'R') {
      turnRight(rover);
    }
    else if (command[i] === 'L') {
      turnLeft(rover);
    }
    else if (command[i] === 'B'){
      moveBackward(rover);
    }
  }
  console.log(`The direction is ${rover.direction}`);
}

Commands('RFFBBRFFBLFRFF')
Commands('LFBRFFBR')
Commands('FFRLBFR')

console.log("Places where the rover was:")
console.log(rover.travelLog);
