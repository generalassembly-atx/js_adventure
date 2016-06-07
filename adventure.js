var teleGun = prompt("You're currently being chased by intergalactic police after helping Grandpa Rick steal a valuable gem in another world. 'Morty! We've gotta get out of here! Where's the teleport gun?? (ground/table)")
  if (teleGun == 'ground') {
    var fight = prompt("Rick grabs the gun and shoots it at the wall in front of you. 'Dammit Morty! This is the freeze gun. Take it and help me take care of these gazorbalops!' (y/n) ")
      if (fight == 'y') {
        var portal = prompt("You and Rick get rid of the space-cops like total badasses. 'OK Morty you didn't make a COMPLETE fool of yourself this time. I'll let you choose where we go now. Pick a number 1-100.")
        if (portal >= 0 && portal <= 33) {
          console.log("You, Rick, and Birdperson chill on Birdperson's planet, eating worms and watching TV.")
        }
        else if (portal >= 34 && portal <= 66) {
          console.log("Rick pushes you into the portal. You're left alone in an unknown world with no tools or form of contact. Wubalubadubdub!!")
        }
        else if (portal >= 67){
          console.log("You both appear back on Earth, where Jerry and Beth are fighting over who ruined who's life.")
        }
      }
      if (fight == 'n') {
        var answer = prompt("'HA! Morty, you should've told me you were a wuss! I would've dropped you off at the WUSS planet.' Rick is then promptly handcuffed. 'Do you know this man?' - says the space cop (y/n)")
          if (answer == 'y') {
            console.log("'There's no way someone would admit to knowing Rick Sanchez. Let him go'")
          }
          else {
            console.log("'Ok, you are free to go. We'll get you back to your home planet.'")
          }
      }
  }
  else {
    var jump = prompt("Rick grabs the gun and shoots it at the wall in front of you. 'Quick! Morty, jump in the portal!' (y/n)")
      if (jump == 'y') {
        var meeseeks = prompt("You jump through the portal. The first thing you notice is that Rick didn't join you. You see a meeseeks box. Do you open it? (y/n) ")
          if (meeseeks == 'y') {
            var what = prompt("'HI!! I'M MR. MEESEEKS!!! LOOK AT ME!!' You remember what Rick told you -- 'You tell the Meeseeks your request, and they grant it' What is your request?")
              console.log("YESSIREE!!! I'll " + what + " RIGHT AWAY!!")
          }
          else {
            console.log("As you walk away, reality starts to glitch. This existence was actually a hologram set up by aliens to sabotage Rick. Wubalubadubdub~")
          }
      }
      else {
        var decision = prompt("'MORTY! We're going whether you like it or not!' Rick pushes you through the portal and you break both legs on contact. Who ya gonna call? (ghostbusters/icet)")
          if (decision == 'ghostbusters') {
            console.log("'What'd you think was gonna happen Morty?? The Ghostbusters aren't actually real dawg.'")
          }
          else {
            console.log("Morty. What a pleasure it is to see you again. As you know, I have regained my title as Water-T. With my title I also gained back incredible healing powers known only to the furthest reaches of our galaxy.")
          }
      }
  }
