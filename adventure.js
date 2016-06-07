///// Beginning Prompts - User Info & Start Prompt /////


var userName = prompt("Welcome to Walking Dead: JavaScipt Edition. You will be presented with a series of questions and possible decisions. Please type the first word of any possible decision you are asked to advance. Good luck.\n\nWhat is your name?");

window.alert("Nice to meet you " + userName + ".");

var begin = prompt("Are you ready to play? Select 'yes' or 'no'.");

if (begin === 'yes') {
   window.alert("Good luck. We will now begin.");
} else {
   window.alert("End.");
}



/////* Master Starting Point - All decisions from firstDecision lead to death loop back to here or winning destination*/////



function firstDecision() {
    var answer = prompt("You have just woken up and have found yourself in your car. You have no idea how you got there. Strangely, no one is around. The scene is as if there was a natural disaster. You start to panic. What do you do?\n\n 'walk' around to invesitgate\n\n'drive' away\n\n'go' back to sleep.");

  if (answer === 'walk') {
      window.alert("You're a risk taker. But will your bravery lead to survival? You forge ahead trying to make sense of the chaos.\n\nSuddenly....you hear sounds in the distance...");
      return fork();
  } else if (answer === 'drive') {
      window.alert("You try and start the car. Nothing. Worried and out of options, you decide to leave the safety of your car.");
      return stranger();
  } else if(answer === 'go') {
      window.alert("Woke up and had no idea how you got there? Looks like a war zone outside? No one in sight? \n\nNo problem!");
      window.alert("Except that 5 minutes later a horde of zombies surrounds your car and eats you alive.");
      return destinationDead();
  } else {
      window.alert('Misspelling or invalid answer. Please re-enter decision.');
      return firstDecision();
  }
}




///// Scenario Funcitons - firstDecision runs through combo of these depending on user answer /////

function fork() {
  window.alert("You come across a fork in the road.");
  var answer = prompt("go 'left'\n\ngo 'right'\n\n'turn' back. I've seen this part in horror movies. Not fooling me.");
  if (answer === 'left') {
    return easy();
  } else if ((answer === 'right') || (answer === 'turn')) {
    return stranger();
  } else {
    window.alert('Misspelling or invalid answer. Please re-enter decision.');
    return fork();
  }
}

function stranger() {
  var answer = prompt("You run into a stranger. Do you trust him?\n\n'yes'\n\n'no'");
  if (answer === 'yes') {
    return bike();
  } else if (answer === 'no') {
    return rest();
  } else {
    window.alert('Misspelling or invalid answer. Please re-enter decision.');
    return stranger();
  }
}

function bike() {
  window.alert("Seems risky. But could be helpful in the end.");
  window.alert("You come across an abandoned bike on the side of the road.")
  var answer = prompt("'take'\n\n'leave");
  if ((answer === 'take') || (answer === 'leave')) {
    return conflict();
  } else {
    window.alert('Misspelling or invalid answer. Please re-enter decision.');
    return bike();
  }
}

function easy() {
  window.alert("Nice! You've taken the absolute easiest path possible in the game.");
  var answer = prompt("Do you want to win this game?\n\n'yes' \n\n'no' ");
  if (answer === 'yes') {
    return destination2();
  } else {
    return destination3();
  }
}

function rest() {
  window.alert("You decide not to trust the stranger and rest instead.")
  var answer = prompt("A few hours later, you feel refreshed and ready to:\n\n'take' on the world\n\n'not' be a hero and cautiously move on");
  if (answer === 'take') {
    return hero();
  } else if (answer === 'not') {
    window.alert("You trip on a rock a die.");
    return destinationDead();
  } else {
    window.alert('Misspelling or invalid answer. Please re-enter decision.');
    return rest();
  }
}

function hero() {
  window.alert("Congratulations Rambo, today is your day. You just need to make one last easy decision and you win.")
  var answer = prompt("'paper'\n\n'rock'\n\n'scissors'");
  if (answer === 'paper') {
    return paper();
  } else if (answer === 'rock') {
    return destination5();
  } else if (answer === 'scissors') {
    return destination4();
  } else {
    window.alert("You mispelled so you must die as punishment.");
    return destinationDead();
  }
}

function paper() {
  window.alert("This was the least easiest of the one last easy decision. It actually kind of sucks. Your chances of winning or starting over are 50/50.");
  var answer = prompt("You run into yet another horde of zombies. You notice your shoe is untied. You:\n\n'bend' over and tie your shoe\n\n'don't' bend over to tie your shoe");
  if (answer === "don't") {
    window.alert(":( :( :( You get away quickly but trip over your shoelace allowing the zombies to catch up. Dead.");
    return destinationDead();
  } else if (answer === 'bend') {
    return destination6();
  } else {
    window.alert('Misspelling or invalid answer. Please re-enter decision.');
    return paper();
  }
}

function conflict() {
  window.alert("Uh oh! In the midst of deciding if you should take the bike, zombies ambush you!");
  var answer = prompt("You fight the stranger for the bike to get away. Pick a number between 1 & 100.");
  if (answer > 25) {
    return destination1();
  } else {
    window.alert("You lost the fight and die in a frenzy of hungry zombies.");
    return destinationDead();
  }

}

///// Possible Destinations /////

function destination1() {
  return "You won the fight! The bike is yours and you ride to safety. You wait out the zombie apocalypse, move to the Bahamas, and win at life.";
}
function destination2() {
  return "Well then you win! You wake up from a dream and go to Taco Bell to celebrate.";
}
function destination3() {
  return "This route is so easy, you even win against your own will. Your life pans out as one giant Opposite Day so it actually kind of sucks.";
}
function destination4() {
  return "Well done. You meet up with Rick and the gang from Walking Dead and win! Depending on how the show ends. You may lose in the future. ";
}
function destination5() {
  return "DING DING DING! Good choice. You meet up with the actual Rock (you smell what he's cookin'?) and defeat the entire zombie apocalypse and then sign a movie deal.";
}
function destination6() {
  return "Good thinking. Tieing your show doesn't take very long and you ensured your get away. Victory!";
}
function destinationDead() {
  //This destinations loops you to beginning
  window.alert("You must now start again from the beginning. Try and remember your path this time.");
  return firstDecision();
}

////// Play Game /////

firstDecision();
