var firstName = prompt("What is your first name?");
var oregonTrail = prompt("Hi " + firstName + ", Are you ready to embark on a grueling expedition across the Great Plains? Which group will you join, Lewis, Clark, or Thomas? (L/C/T)");

if(oregonTrail === "L") {
  var lewis = prompt("Before we hit the road, we need to purchase ammo. How many rounds of bullets do you want from the store? (1-50)");
}
if(lewis <= 10) {
  console.log("You run out of ammo and struggle to hunt for food and grow weary");
  } else if(lewis > 10 && lewis <= 25) {
    console.log("You're able to take down two buffalo and have ration for the journey.");
    } else if(lewis > 25 && lewis <=50) {
      console.log("You have overspent and now don't have enough for money for other supplies.");
    }

  if(oregonTrail === "C") {
    var clark = prompt("We have reached a fork in the road. Do we head North or West (N/W)");
  }
  if(clark === "N") {
    console.log("This path is too rugged and the wheels of our wagon have been damaged. We've run out of food and supplies. Doesn't look like many will survive.");
  } else if(clark === "W") {
    console.log("We have made it to Wyoming and there many animals to hunt to keep us fed.");
  }

if(oregonTrail === "T") {
  var thomas = prompt("We have made it far out West to the Pacific Ocean! Do you want to head up to Oregon, down to California, or head back to Idaho? (O/C/I)");
} if(thomas === "O") {
  console.log("Great choice. It is beautiful out here with lush green pastures all over for growing crops.");
} else if(thomas === "C") {
  console.log("The weather here is incredible but it looks to be crowded with many other settlers.");
} else if(thomas === "I") {
  console.log("Oh no this was a mistake. There is nothing here. We might not have enough supplies to head back. We're dooooomed.");
}
