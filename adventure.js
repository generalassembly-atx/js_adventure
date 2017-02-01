var firstName = prompt("What is your name?");

console.log('Welcome to the Oregon Trail, ' + firstName + '!');
  var playerJob= prompt('What is your occupation? \n\nBanker\nCarpenter\nFarmer');
  
if (playerJob === "Banker"){
  console.log("You have $1600. But you may struggle to most out in the rough wilderness.");
}else if(playerJob ==="Carpenter"){
  console.log("You have $800.You will do alright out west.");
}else if(playerJob =="Farmer"){
  console.log("You have $400, but are the most prepared for harsh conditions of the wild west.\nWhen would you like to leave?");
}

var leaveMonth= prompt("When would you like to leave?\nApril\nJune\nAugust");
if ((playerJob === "Banker") && (leaveMonth === "April")){
  console.log("You're off! That's a great time to leave! You'll arrive well before the harsh winter.");
}else if ((playerJob === "Banker") && (leaveMonth === "June")){
  console.log("You're off! Nice choice, but be careful of the summer heat!");
}else if ((playerJob === "Banker") && (leaveMonth === "August")){
  console.log("You're off! A little late in the year, hopefully you can arrive before winter comes. ");
}

if ((playerJob === "Carpenter") && (leaveMonth === "April")){
  console.log("You're off! That's a great time to leave! You'll arrive well before the harsh winter.");
}else if ((playerJob === "Carpenter") && (leaveMonth === "June")){
  console.log("You're off! Nice choice, but be careful of the summer heat!");
}else if ((playerJob === "Carpenter") && (leaveMonth === "August")){
  console.log("You're off! A little late in the year, hopefully you can arrive before winter comes. ");
}

if ((playerJob === "Farmer") && (leaveMonth === "April")){
  console.log("You're off! That's a great time to leave! You'll arrive well before the harsh winter.");
}else if ((playerJob === "Farmer") && (leaveMonth === "June")){
  console.log("You're off! Nice choice, but be careful starting out in the summer heat!");
}else if ((playerJob === "Farmer") && (leaveMonth === "August")){
  console.log("You're off! A little late in the year, hopefully you can arrive before winter comes. ");
}
var playerRoute =prompt ("Which route would you like to take?(Type the first letter)\n\n(g) Gulliver's Gulch\n(n)Newmann hills");
if ((playerJob === "Banker") && (leaveMonth === "April") && (playerRoute==="g")){
  console.log("You made it to oregon, one family member died in a flash flood.");
  
}else if ((playerJob === "Banker") && (leaveMonth === "April") && (playerRoute==="n")){
  console.log("Congrats! You and your family made it to Oregon.You lost two oxen, and near exhaustion. Enjoy your new life out west.");
  
}else if ((playerJob === "Banker") && (leaveMonth === "June") && (playerRoute==="g")){
  console.log("You made it to oregon, but 2 of your family members died of dysentery on the way.");
  
}else if ((playerJob === "Banker") && (leaveMonth === "June") && (playerRoute==="n")){
  console.log("You ran out of water and two of your ox died of heat exhaustion. You lose.");
  
}else if ((playerJob === "Banker") && (leaveMonth === "August") && (playerRoute==="g")){
  console.log("You got lost for 2 weeks and died of dehydration.");
  
}else if ((playerJob === "Banker") && (leaveMonth === "August") && (playerRoute==="n")){
  console.log("You got caught in a blizzard and froze to death.");
  
}else if ((playerJob === "Carpenter") && (leaveMonth === "April") && (playerRoute==="g")){
  console.log("You made it to oregon, one family member died in a flash flood.");
  
}else if ((playerJob === "Carpenter") && (leaveMonth === "April") && (playerRoute==="n")){
  console.log("Congrats! You and your family made it to Oregon. Enjoy your new life out west.");
  
}else if ((playerJob === "Carpenter") && (leaveMonth === "June") && (playerRoute==="g")){
  console.log("You made it to oregon, but 2 of your family members died of dysentery on the way.");
  
}else if ((playerJob === "Carpenter") && (leaveMonth === "June") && (playerRoute==="n")){
  console.log("You ran out of water and two of your ox died of heat exhaustion. You lose.");
  
}else if ((playerJob === "Carpenter") && (leaveMonth === "August") && (playerRoute==="g")){
  console.log("You got lost for 2 weeks and died of dehydration.");
  
}else if ((playerJob === "Carpenter") && (leaveMonth === "August") && (playerRoute==="n")){
  console.log("You got caught in a blizzard and froze to death.");
  
}else if ((playerJob === "Banker") && (leaveMonth === "April") && (playerRoute==="g")){
  console.log("You made it to oregon, one family member died in a flash flood.");
  
}else if ((playerJob === "Farmer") && (leaveMonth === "April") && (playerRoute==="n")){
  console.log("Congrats! You and your family made it to Oregon. Enjoy your new life out west.");
  
}else if ((playerJob === "Farmer") && (leaveMonth === "June") && (playerRoute==="g")){
  console.log("You made it to oregon, but 2 of your family members died of dysentery on the way.");
  
}else if ((playerJob === "Farmer") && (leaveMonth === "June") && (playerRoute==="n")){
  console.log("You ran out of water and two of your ox died of heat exhaustion. You lose.");
  
}else if ((playerJob === "Farmer") && (leaveMonth === "August") && (playerRoute==="g")){
  console.log("You got lost for 2 weeks and died of dehydration.");
  
}else if ((playerJob === "Farmer") && (leaveMonth === "August") && (playerRoute==="n")){
  console.log("You got caught in a blizzard and froze to death.");
  
}
