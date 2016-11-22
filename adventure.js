var name = prompt("What's your name?");
//intro
if (name){
  var fitnessLevel = prompt("Hi " + name + ". I understand you're shopping for a dog. First things first--would you describe yourself as an active person?");

}if (fitnessLevel === "yes"){
  var temp = prompt("Really? You don't look like it. Do you live in a warm or cold climate?");

}else if(fitnessLevel === "no"){
  var temp = prompt("I figured. So does your fat ass live in a warm or cold climate?");

}if (temp === "warm"){
  var size = prompt("Me too. Would you prefer a large or small companion?");

}else if(temp === "cold"){
  var size = prompt("That sucks. Anyway, are you looking for a small or large dog?");

}if(size === "small"){
  prompt("Congratulations, you get an annoying Chihuahua.");

}else if(size === "large"){
  prompt("Good. Little dogs suck. Your best bet is a bulldog." )
}
