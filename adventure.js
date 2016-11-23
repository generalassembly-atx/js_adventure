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

var doWhat = prompt("To get started, Let's keep to the basics, are you most interested in eating, exploring, or art? (eating/exploring/art)");

 if (doWhat === "eating" || "Eating") {
    var eat = prompt("Ah, good choice! The 3 reigning food groups here are tacos, barbeque, and hamburgers.  Which do you prefer? (t/b/h)");
      if (eat === "t" || "T") {
        console.log("Tacos! You're in luck! Tacos are fantastic choices here, try Torchy's for some Austin flare!");
      } else if (eat === "b" || "B") {
        console.log("Can't go wrong with the BBQ! Get all the meat sweats you can handle and check out Stiles Switch BBQ, or it might be worth the wait to try Franklin's BBQ.");
      } else if (eat === "h" || "H") {
        console.log("Whoop! You're in luck, we've got some great burger joints scattered around, but you should definitely try Hopdoddy for a great burger experience. Don't forget to add a side of truffle fries");
      }
// stopped here, as code is not working properly... :(

 } else if (doWhat === "exploring" || "Exploring") {
   console.log("Fantastic choice. Austin is a very outdoors oriented city. Do you want to check out a trail, enjoy a picnic, or jump in the water? (trail/picnic/water)");
 } else if (doWhat === "art" || "Art") {
   console.log("Nice! When finding ways to expand your cultural fluency, do you prefer to visit a museum, gallery, or studio? (m/g/s)");
 }
