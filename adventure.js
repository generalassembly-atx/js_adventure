// Path to the Gold Medal - Van Cliburn Piano Competition

alert("Welcome to the very simply application process for the Van Cliburn Piano Competition!  Please answer the following questions, and we'll go from there.");

var introduction = prompt("What is your name?");
  if("He who must not be named...") {
    console.log("Voldemort!");
  } else if ("I have no name...") {
      console.log("Well, aren't we eccentric?  DISQUALIFIED!!!");
  } else {
      console.log("Best of luck to you!  This competition is no joke.");
  }


var instrument = prompt("What do you play?");
  if (instrument == "piano") {
    console.log("You’ve come to the right place then.  Best of luck to you.");
  } else {
      console.log("This is a piano competition... DISQUALIFIED!!!");
  }


var audio = prompt("Did you play an all-Bach program?");
  if (audio == "no") {
    console.log("You may progress to the next round.");
  } else {
      console.log("No one wants to hear your mediocre Bach.  You were just shot to death for playing an all-Bach program.");
  }


var video = prompt("On a scale of 1-10, how would you rate your video quality?");
  if (video < 3) {
    console.log("... Good job not making a good video for quite possibly the biggest opportunity of your career.  DISQUALIFIED!!!");
  } else if (3 <= video <= 7) {
      console.log("We'll let you slide through, BUT we don't really like you.");
  } else {
      console.log("We really liked you.  Look forward to hearing more of your work in the preliminaries.");
  }


var preliminary = prompt("Did they tune the piano before you played?");
  if (preliminary == "yes") {
    console.log("You sounded great!  See you in the semifinals!");
  } else {
      console.log("We've never heard anything so atrocious... DISQUALIFIED!!!");
  }


var semifinals1 = prompt("Did you get a chance to rehearse with the string quartet?");
  if (semifinals1 == "yes") {
    console.log("Masterful... just masterful.");
  } else {
      console.log("Did a chimp teach you how to play the piano?  Good lord... DISQUALIFIED!!!");
  }


var semifinals2 = prompt("On a scale of 1-10, how would you rate your choice of program?");
  if (semifinals2 < 3) {
    console.log("You need to mix it up more.  We want to hear diversity and breadth... DISQUALIFIED!!!");
  } else if (3 <= semifinals2 <= 7) {
      console.log("Begrudgingly, you did play well... but please make an effort to play more diverse music.");
  } else {
      console.log("Bravo!!!");
  }


var finals1 = prompt("Did you make artistic facial expressions and sway back and forth to convince people you were really musical and into the music?")
  if (finals1 == "yes") {
    console.log("What an artist!!! Keep it up and you just might win!");
  } else {
      console.log("HACK!!!");
  }


var finals2 = prompt("How did you play?  Terribly, OK, or excellently?");
  if (finals2 == "terribly") {
    console.log("Get OUT!");
  } else if (finals2 == "OK" ) {
      console.log("Don't get mad if we don't give you a medal now.");
  } else {
      console.log("I think we found our winner...");
  }


alert("The judges will now tally their scores and make a final decision.");


var judgement = alert("This is what we've come to decide");
  if (Math.random() < 0.1) {
    console.log("You are hereby banished from playing the piano ever again!  GET OUT!!!!");
  } else if (0.1 <= Math.random() < 0.3) {
      console.log("No medal awarded... we’re jerks and we think you all sucked when it’s all said and done... we were just leading you on, so we didn’t have to go back to our jobs.");
  } else if (0.3 <= Math.random() < 0.5) {
      console.log("You got the Bronze Medal.  Good job at being just good enough to be awarded a medal, but just mediocre enough to essentially be in last place.");
  } else if (0.5 <= Math.random() < 0.7) {
      console.log("If you're not first, you're last... but here you go anyway.  Silver medal.");
  } else if (0.7 <= Math.random() < 0.9) {
      console.log("You just won the gold medal.  Fantastic job.");
  } else {
      console.log("You were so good... You just became an overnight sensation.  A superstar!!!  You're set for life!");
  }
