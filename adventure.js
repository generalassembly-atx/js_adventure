name = prompt("Tell me your name");

alert("Nice to meet you, " + name);
music = prompt("What is your favorite kind of music? Rock, Classical, or Jazz. (R/C/J)");

if (music === "R") {
  alert("I see you are a rocker. Cool. I know a couple of bands who could use some help.");
  band = prompt("Who would you rather jam with, the Beatles or the Stones? (B/S)");
  if (band === "B") {
    alert("Sorry. Turns out they haven't been around for years. My bad.");
  } else {
    alert("Awesome! Joe Perry is sick, so they need a good guitarist.");
    guitar = prompt("Do you play guitar? (Y/N)");
  }
  if (guitar === "Y") {
    alert("Great! See you at the gig!");
  } else {
    alert("No? Maybe you can be a roadie.");
  }
}

if (music === "C") {
  alert("You like classical? Me too!");
  composer = prompt("Who is your favorite composer, Mozart or Beethoven? (M/B)");
  if (composer === "M") {
    alert("Mozart is da man!");
  } else {
    alert("Beethoven is da bomb!");
  }
}

if (music === "J") {
  alert("Jazz is cool! Might having a gig for you if your qualified.");
  jazz = prompt("What style do you prefer, Benny Goodman, Miles Davis, or John Coltrane? (G/D/C)");
  if (jazz === "G") {
    alert("Old school, cool. To get the gig, I need some more information.");
    instrument = prompt("How many instruments can you play?");
    if (instrument < 2) {
      alert("Sorry. Musicians in Benny's band are multi-talented. No one plays just one instrument.");
    } else {
      alert("You play " + instrument + " instruments? Come jam with us!");
    }
  }

  if (jazz === "D") {
    alert("Miles is cool.");
    miles = prompt("Can you play drums? (Y/N)");
    if (miles == "Y") {
      alert("Great! We will see you at the gig!");
    } else {
      alert("Sorry, maybe another time.");
    }
  }

  if (jazz === "C") {
    alert("Coltrane needs another sax player.");
    sax = prompt("Do you play sax? (Y/N)");
    if (sax === "Y") {
      alert("Awesome!");
      tenor = prompt("Do you play alto or tenor? (A/T)");
      if (tenor === "T") {
        alert("Sorry, John is our lead tenor.");
      } else {
        alert("Great! See you at rehearsal!");
      }
    } else {
      alert("No? Can't use you, " + name);
    }
  }
}
