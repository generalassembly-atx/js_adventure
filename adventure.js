var firstName = prompt('What is your first name?');
var cCity = prompt("Hi " + firstName + ", welcome to the Travel Adventure tours. Which city would you want to go to? Berlin, Chicago, or Toyko? (B/C/T)");

if(cCity === "B"){
 var berlinadventures = prompt("Welcome to Berlin! Jet lags pretty bad huh? What do you want to do? Straight to the club, or sightseeing? (Club/Sight)");
} 

if(berlinadventures === "C"){
  var cOrS = prompt("Got to the club, it's going off, down for drinks? (Y/N)");
} else if(berlinadventures ==="S")
  var cOrS = prompt("While sightseeing, you meet fellow travelers, they invite you to go out. Do you? (Y/N)");
if(cOrS === "Y"){
  console.log("Bad move, you drank too much and got lost on the way home ended up getting arrested for fighting a cop.");
} else if(cOrS === "N"){
  console.log("You had a great time exploring the city. You find your hotel room, write in your blog, and fly back home a few days later.")
}

if(cCity === "C"){
  var chicagoadventures = prompt("Man, that was a turbulent flight. Let's g hit up the bar, how many drinks do you want to drink? (1-10)");
}
if(chicagoadventures <= 1){
  console.log("You relax and go explore the city have a great time");
} else if(chicagoadventures > 1 && chicagoadventures <= 4){
  console.log("You get buzzed, meet some new friends and create great memories.");
} else if(chicagoadventures > 4 && chicagoadventures <= 8){
  console.log("You get too drunk, the cops get called and you get arrested");
} else if (chicagoadventures > 8 && chicagoadventures <= 10){
  console.log("Sorry, you black out and somehow kill yourself");
}

if(cCity ==="T"){
  var toykoadventures = prompt("You're really not used to flying for this long. You stay up for 36 hours straight and land in the airport. Do you take a cab or train to your hotel? (C/T)")  
}
if(toykoadventures === "C"){
  console.log("Bad move, you get mugged by the cab driver and lose all of your money. You spend the rest of your time just hanging out in the hotel");
} else if(toykoadventures === "T"){
  var toykoTrain = prompt("You take the train, check into your hotel, and fall asleep for 2 days straight. You only have a day left. Do you want to eat ramen or go sight seeting? (R/S)");
}

if(toykoTrain === "R"){
  console.log("You get food poisoning from the ramen and die. Sorry.");
} else if(toykoTrain === "S"){
  console.log("You have a great last night in Toyko and fly home.");
}
