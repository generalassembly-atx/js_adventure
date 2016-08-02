var age = prompt("What's your age");
if (age > 18) {
	alert ('Get ready to answer!');
} else {
	console.log ('Please come back when you are 18 or older');
}

var text;
var eat = prompt("Would you like to eat? yes or no?");
switch (eat) {
  case "yes":
    var burger = prompt("Would you like to have a burger, taco or sushi.");
}
switch (burger) {
  case "burger":
    var cheese = prompt('would you like Swiss or Cheddar cheese on that?');
}
switch (cheese) {
  case "swiss":
    text = 'Great choice!';
    break;
  default:
    text = "Amazing";


}
var taco = prompt("would you like hot or mild sauce with that?");
switch (taco) {
  case "hot":
    text = 'Great choice!';
    break;
  default:
    text = "Amazing";

}

var sushi = prompt("would you like tuna or salmon?");
switch (sushi) {
  case "tuna":
    text = 'Great choice!';
    break;
  default:
    text = "Amazing";

}
