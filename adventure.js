var myName = prompt("What is your name?");
var springfield = prompt("Hello, " + myName + "." + " Have you been to Springfield before?");


if (springfield === "yes" || springfield === "Yes") {
  var hungry = prompt("Great! Are you hungry today?"); {
    if (hungry === "yes" || hungry === "Yes") {
      var favFood = prompt("What is your favorite food?"); {
       var howHungry = prompt("Awesome! We all like " + favFood + "! On a scale of 1-5, how hungry are you?"); {
          if (howHungry <= 2) {
            console.log("Hmm...you're not that that hungry, let's just grab a drink at Moe's Tavern with the guys.");
          } else if (howHungry === 3) {
              console.log("Let's just get a snack at Lard Lad Donuts!");
          } else {
              console.log("You're pretty hungry! Let's go to Krusty Burger!");
          }
        }
      }
    } else if (hungry === "no" || hungry === "No") {
        var notHungry = prompt("What is your favorite amusement park?");
    } if (notHungry !== "Krustyland") {
        prompt("That park isn't in Springfield! But welcome to Krustyland!");
    }
  }
} else if (springfield === "no" || "No") {
    var firstVisit = prompt("You're in for a treat! Would you be interested in learning more about Springfield or going straight to work? Type learn more about Springfield or go straight to work."); {
    if (firstVisit === "go straight to work");
      var work = prompt("Do you work with your hands or with numbers?"); {
      if (work === "hands") {
        console.log("You should go work at the Springfield Nuclear Power Plant!");
      } else if (work === "numbers") {
          console.log("You should go to work at the Kwik-E-Mart!");
      }
      }
    }
} else if (firstVisit === "learn more about Springfield")
    var learn = prompt("Do you learn better in a classroom or online?"); {
    if (learn === "online") {
        console.log("Let's go to 742 Evergreen Terrace and look some more information up about Springfield with Marge and Maggie!");
    }
    if (learn === "classroom"); {
      console.log("Me too! Let's go learn more about Springfield at Springfield Elementary with Mrs. Krabappel.");
    }

  }
