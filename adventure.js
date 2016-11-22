name = prompt("What is your name?");

console.log("Hello "+ name)

game = prompt("Would you like to play a game? (Yes/No)");
if (game === "Yes"){
  console.log("Yayyyyyyyyyy")
  game1 = prompt("What is your age?");
  console.log(game1)

  if (game1 > 21){
    console.log("Get off the computer and get a beer")
  } else {
    console.log("STAY IN SCHOOL AND STAY OFF DRUGS OR YOU WILL DIE!")
  }
} else {
  console.log("Well I didn't want to play anyways")
}
