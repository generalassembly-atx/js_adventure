//if answer begins with capital letter, please provide capital letter
confirm("Let's go out for a drink!");

var age = prompt('How old are you?');

if (age >= 21) {
 var bar = prompt("Great! You're old enough to go out. Should we go to Handlebar, Side Bar or Hotel Vegas?");
} else {
  confirm('Nevermind kid, go home and do your damn homework!');
}

if (bar === 'Handlebar'||'handlebar') {
  var handleBar = prompt('Great choice. You walk to Handlebar and see the girl you like. Do you buy her a drink? Yes, no or cry');
} else if (bar === 'Side Bar' || 'Side bar' || 'side bar'){
  var sideBar = prompt('Dangerous choice. Be careful, the drinks are strong here. Whisky, beer or water?');
} else {
  var hotelVegas = prompt("Phew..that was a long walk. You either chose this bar because you like it or you can't spell for shit. You see an old high school friend here. Do you talk to him? Yes, no or fight?");
}

if (handleBar === 'Yes' || 'yes') {
  var girl = prompt('You buy her a drink. She seems interested. Continue talking? Yes or no');
} else {
  prompt('Welp, might as well go home. Nice try, champ.');
}

if (girl === 'yes' || 'Yes') {
  prompt('You get her number. Great success!');
} else {
  prompt('Come onnnnnnn');
}


if (sideBar === 'Whisky' || 'whisky') {
  var drunk = prompt('You are too drunk now. How many drinks have you had??');
} else if (sideBar === 'beer' || 'Beer') {
  confirm('Bad choice. Mixed drinks are way cheaper. You are broke now. Good luck getting home');
} else {
  prompt("Good choice, Mr. Designated Driver! You didn't kill your friends!");
}

if (drunk < 3) {
  prompt('Wow, your tolerance is low. Go home, you mess');
} else if (drunk == '3') {
  prompt('Perfect number of drinks. Have fun!');
} else {
  prompt('Jesus, hopefully one of your friends will get you home. Have fun suffering tomorrow');
}

if (hotelVegas == 'Yes' || 'yes') {
  prompt("Turns out that wasn't your friend. Boy that was embarrassing");
} else if (hoteVegas == 'No' || 'no') {
  prompt('Woah, upon closer inspection it turns out that is not your friend. You win this round');
} else {
  prompt('Well, that was a dumb decision. You end up in jail with an assault charge. Sleep tight');
}
