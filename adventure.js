/* Brainstorming
We got a first-timer here! So you've come to check out what Austin has to offer, let's start off with the basics. Are you most interested in? Eating, exploring the outdoors, or checking out the arts?
    - Eat
      - Ah, good choice! It's either either tacos, barbeque, and burgers reign supreme here, which do you prefer?
        - tacos = You're in luck! Tacos are fantastic choices here, try Torchy's for some Austin flare!
       - Barbeque || BBQ = Can't go wrong with the BBQ! Get all the meat sweats you can handle and check out Stiles Switch BBQ, especially if you don't want to wait in line at Franklin's BBQ!
        - Burgers = Whoop! You're in luck, we've got some great burger joints scattered about, but you should definitely try Hopdoddy for a great burger experience. Don't forget to add a side of truffle fries!
    - explore the outdoors
        - Fantastic choice. Austin is a very outdoors oriented city. Do you prefer to stick to a trail, enjoy a picnic, or jump in the water?
            - Trail
              - How to do you like your terrain: rugged or uncomplicated?
                - Uncomplicated = Great! You'll find what you need at Lady Bird Lake with a hike and bike trail that takes you around a piece the Colorado river.
                - Rugged = So adventurous! Take a hike on one of many trails in the lush Barton Creek Greenbelt.
            - Enjoy a picnic || picnic
              - Would you like some hilltop scenery, or a nice day at a park?
                  - Hilltop scenery = You are in for quite a treat! Head over to Mount Bonnell or the lookout point at Lake Austin and 360.
                  - Nice day at the park - Ah, take in that gorgeous skyline and enjoy your charcuterie platter at Zilker Park or Lady Bird Lake.
            - Jump in the water || water
              - What's suits your style? A pool, hidden spot, or a lake?
                Pool - Ohhhhh man, you must go to Barton Springs Pool!
                Hidden Spot - Well, maybe not super "hidden", but try out McKinney Falls, you won't be dissapointed.
                Lake - Take your pick from Lake Austin or Lake Travis. Like jumping off cliffs? Choose Lake Travis.
    - Checkout out the Arts || Art || arts
      - When finding ways to expand your cultural fluency, do you prefer to visit a museum, gallery, or studio?
        - Museum: So many to choose from! Try out the Blanton museum at UT and The Contemporary Austin to start.
        - Gallery: Some favorites here are Women and Their Work and Big Medium
        - Studio: Knock out several birds with one stone and go to Canopy. Many artists have studios there and will welcome you into their space.
*/

var userName = prompt("Welcome, to Austin, Texas! What is your name?");

var doWhat = prompt("Hi "+userName+"! To get started, let's keep to the basics, are you most interested in eating, exploring, or art in Austin? (Type: eating/exploring/art)");

// If you choose Eating
 if (doWhat === "eating" || doWhat === "Eating") {
    var eat = prompt("Ah, good choice! The 3 reigning food groups here are tacos, barbeque, and hamburgers.  Which do you prefer? (Type: tacos/bbq/hamburgers)");
      if (eat === "tacos" || eat === "Tacos") {
        console.log("Tacos! You're in luck! Tacos are fantastic choices here, try Torchy's for some Austin flare!");
    }   else if (eat === "bbq" || eat === "BBQ") {
        console.log("Can't go wrong with the BBQ! Get all the meat sweats you can handle and check out Stiles Switch BBQ, or it might be worth the wait to try Franklin's BBQ.");
    }   else if (eat === "hamburgers" || eat === "Hamburgers" || eat === "burgers" || eat === "Burgers" || eat === "burger") {
        console.log("Whoop! You're in luck, we've got some great burger joints scattered around, but you should definitely try Hopdoddy for a great burger experience. Don't forget to add a side of truffle fries!");
    }
 }
 // If you choose Exploring
 else if (doWhat === "exploring" || doWhat === "Exploring") {
   var explore = prompt("Fantastic choice. Austin is a very outdoors oriented city. Do you want to check out a trail, enjoy a picnic, or jump in the water? (Type: trail/picnic/water)");
   if (explore === "trail" || explore === "Trail") {
      var trail = prompt("How to do you like your terrain: rugged or uncomplicated? (Type: rugged/uncomplicated)");
      } if (trail === "r" || trail === "R" || trail === "rugged") {
        console.log("So adventurous! Take a hike on one of many trails in the lush Barton Creek Greenbelt.")
      } else if (trail === "u" || trail === "U" || trail === "uncomplicated") {
      console.log("Great! You'll find what you need at Lady Bird Lake with a hike and bike trail that takes you around a piece the Colorado river.")
   } else if (explore === "picnic" || explore === "Picnic"){
      var picnic = prompt("Would you like some hilltop scenery, or a nice day at a park? (Type: hilltop/park)");
      }if (picnic === "hilltop" || picnic === "Hilltop") {
        console.log("You are in for quite a treat! Head over to Mount Bonnell or the lookout point at Lake Austin and 360.")
      } else if (picnic === "park" || picnic === "Park") {
        console.log("Ah, take in that gorgeous skyline and enjoy your charcuterie platter at Zilker Park or Lady Bird Lake.");
    } else if (explore === "water" || explore === "Water") {
      var water = prompt ("What's suits your style? A pool, hidden spot, or a lake? (Type: pool/spot/lake)");
      } if (water === "pool" || water === "Pool") {
        console.log("Ohhhhh man, you must go to Barton Springs Pool!");
      } else if (water === "spot" || water === "Spot" || water === "hidden spot") {
        console.log("Well, maybe not super hidden, but try out McKinney Falls, you won't be dissapointed.");
      } else if (water === "lake" || water === "Lake") {
        console.log("Take your pick from Lake Austin or Lake Travis. Like jumping off cliffs? Choose Lake Travis.");
  }
 }
 // If you choose Art
 else if (doWhat === "art" || doWhat === "Art") {
   var art = prompt("When finding ways to expand your cultural fluency, do you prefer to visit a museum, gallery, or studio? (Type: museum/gallery/studio)");
   if (art === "museum" || art === "Museum") {
     console.log("So many to choose from! Try out the Blanton museum at UT, and The Contemporary Austin to start.");
   } else if (art === "gallery" || art === "Gallery") {
     console.log("Some popular galleries here are Women and Their Work and Big Medium");
   } else if (art === "studio" || art === "Studio") {
     console.log("Knock out several birds with one stone and go to Canopy. Many artists have studios there and will welcome you into their space.");
   }
 }
