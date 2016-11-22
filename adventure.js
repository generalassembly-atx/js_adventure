console.log("There's an eerie knock at the door");
var answerDoor = prompt("Do you answer? (Y/N)");

var doorChoice = answerDoor.toUpperCase();

while (doorChoice === "N" || doorChoice !== "Y") {
  console.log("Violent thumping proceeds from the door");
  doorChoice = prompt("Do you answer now?! (Y/N)");
}

console.log("The Grim Reaper stands before you and asks for your name: ");
var userName = prompt("You nervously give your name");

console.log("You know why I'm here " + userName + "...as Death reaches out and opens his bony cold hand");
var choiceHandRun = prompt("Do you give your hand? (<G>ive Hand / <R>un)");

if (choiceHandRun.toUpperCase() === "G") {
  console.log("I can't recall the last time someone accepted their fate. Tell you what " + userName + ", give me a name. \"A name? Wh-Why?\" you ask. Death impatiently erupts \"ANY NAME!\"");

  var anotherName = prompt("You whisper the name: ");

  console.log("Do you like this " + anotherName + "?\" Death inquires.");

  var likePerson = prompt("You reluctanctly respond with a...(Y/N)");
  if (likePerson.toUpperCase() === "Y") {
    console.log("\"Tsk tsk...Well thats a shame. Muwhahaha\". As Death vanishes into the darkness");
  } else {
    console.log("\"Is that so?\" Death inquires. \"Well carry on then. I have an appointment with " + anotherName + "\".");
  }
} else if (choiceHandRun.toUpperCase() === "R") {
    console.log("You make a break for it and run!");
    var runLength = prompt("How many miles do you run? (1-10)");

    if (runLength < 0) {
      console.log("You ran backwards straight into Heck...well that sux");
    } else if (runLength >= 1 && runLength <= 5) {
      console.log("You escaped the Grim Reaper! You celebrate by going to Torchy's Tacos. ");
    } else if (runLength > 6) {
      console.log("You escape Death's grasp! But you suffer a stroke & die...oh the irony");
    } else {
      console.log("Invalid Entry! Death appears out of thin air & drags you into the abyss");
    }
} else {
  console.log("Death tires of your nonsense & robs you of your soul! gg")
}
