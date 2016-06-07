var person = prompt("Please enter your name");
  if (person==="chef"){
    console.log("Nice to meet you, "+ person + ".");
  }else {
    console.log ("Please enter person name \"chef.\"");
  }

console.log("You are makeing dinner for an elite group of judges");

var chefAnswer=prompt("Do you want to make beef or prok?");
  if(chefAnswer==="beef"){
    console.log("You are going to make a dish of beef, however the beef is overcooked. You should make a new beef dish!");
  } else {
    console.log("Oh no! dish of pork is cookovertime. You should make a new beef dish! ");
  }

var newDish=prompt("Do you make a new dish?");
  if(newDish==="yes"){
    console.log("Great! Can't wait your new dish");
  }else{
    console.log("You should make a new dish!!!");
  }

var cookingtime=prompt("Do you still have 3 minutes left?");
  if(cookingtime==="yes") {
    console.log("You are run out of time to cook the dish, hurry up!!");
  }else {
    console.log("Great!!Can't wait you chef!");
  }

var resultOfCooking=prompt("Does juger like it?");
  if(resultOfCooking==="no"){
    console.log("judges being jerk");
   }else {
    console.log("You did a great job chef!!")
   }
