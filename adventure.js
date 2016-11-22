var name = prompt("what is your name?");
console.log("nice to meet you " + name + "!");

console.log("ok " + name + ", What would you like to do today?")
var plans = prompt("bars, games or jogging?");
console.log("Let's do " + plans + "!");

/* first fork in the road */

if (plans === "bars") {
  var bar = prompt("ok which one would you like to go to? red, white or blue bar?");
} else if (plans === "games") {
  var game = prompt("which system are you in the mood for? playstation, xbox or console?");
} else {
  var joggingPath = prompt("where would you like to jog? woods, city or track?");
}

/* Bar fork */

if (bar === "red") {
  var seats = prompt("where would you like to sit? at the bar? at a table? or on the patio?");
} else if (bar === "white") {
  var bills = prompt("Did you remember to get small bills? did you bring more than a hundred dollars? how much?");
} else  if (bar === "blue") {
  var closed = prompt("this bar is closed what should we do now? a new bar? home? or food?");
}

if (seats === "bar") {
  console.log("you got drunk! You win");
} else if (seats === "table") {
  console.log("you got drunk! You still win!");
} else if (seats === "patio") {
  console.log("it's cold out. you lose!!");
}

if (bills <= 100) {
  console.log("NO! We're going home");
} else if (bills > 100) {
  console.log("hope you brought small bills! haha");
}

 if (closed === "bar") {
   console.log("it's too late, time to go home!");
 } else if (closed === "home") {
   console.log("You're lame. just go home");
 } else if (closed === "food") {
   console.log("maybe you should try working out instead");
 }


/* games section */

if (game === "playstation") {
  var psGame = prompt("ok which game? Dance, Dance revolution? Barbie playhouse? or Murder, Death, Kill?");
} else if (game === "xbox") {
  console.log("Sorry we're a playstation family here. Have a good night!");
} else if (game === "console") {
  console.log("good choice. have a good night");
}

if (psGame === "DDR") {
  console.log("Really? thats your choice?");
} else if (psGame === "barbie") {
  console.log("bro! who are you? go home. I'm getting drunk");
} else if (psGame === "MDK") {
  console.log("Finally a good choice");
}



/* jogging section */

if (joggingPath === "woods") {
  var woodsPath = prompt("are you sure you want to run this far? yes or no");
} else if (joggingPath === "city") {
  var cityPath = prompt("are you sure you want to run through this dark area? yes or no");
} else if (joggingPath === "track") {
  var trackPath = prompt("Do you really want to run in a circle? yes or no");
}

if (woodsPath === "yes") {
  console.log("you got lost in the woods and had to be rescued. you lose");
} else if (woodsPath === "no") {
  console.log("good choice. now lets go get drunk!");
}

if (cityPath === "yes") {
  console.log("sorry you got mugged. try drinking instead");
} else if (cityPath === "no") {
  console.log("Have fun at the bars");
}

if (joggingPath === "yes") {
  console.log("Wow! have fun getting dizzy");
} else if (joggingPath === "no") {
  console.log("Wow. don't be so lazy. get out there")
}
