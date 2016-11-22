/*
The below code is not close to complete. I have mapped out the game flow in the 'js homework flow notes' rtf file for reference.
My initial approach was just to write code that worked and then assess how to reduce repetitiveness and re-write whatever code I can.
*/

//***********Begin Game Code**********************************

//User is asked what their name is

name = prompt("What is your name?");

//User is asked which European city they would like to visit.

city = prompt("Hi " + name + ", I’ve heard flights to Europe are super cheap right now for certain major cities.
                              Choose one of the following cities to visit while fares are low: London, Paris, Berlin,
                              Rome, Amsterdam, Madrid, Stockholm.");
var cityChoice = 'London'||'Paris'||'Berlin'||'Rome'||'Amsterdam'||'Madrid'|| 'Stockholm';

//User is asked a question about their city choice

switch (cityChoice) {
  case 'London':
      prompt(london);
      break;
  case 'Paris':
      prompt(paris);
      break;
  case 'Berlin':
      prompt(berlin);
      break;
  case 'Rome':
      prompt(rome);
      break;
  case 'Amsterdam':
      prompt(amsterdam);
      break;
  case 'Madrid':
      prompt(madrid);
      break;
  case 'Stockholm':
      prompt(stockholm);
      break;
}

// User chose London and is asked about preferred destination in the city
var london = 'Aren’t afraid of Brexit angst eh? I admire that! Would you prefer to see the Tate or Big Ben as part of your travel package?';
var londonChoice = 'Tate' || 'Big Ben';

//User chose Tate and is asked about preferred artist.
var tate = 'I knew you were a cultured individual! Do you want to see Picasso or Warhol more?';
var tateChoice = 'Picasso' || 'Warhol';

//User chooses either Picasso or Warhol
if (tateChoice ==="Picasso") {
  prompt(picasso);
} else {
  prompt(warhol);
}

//User chose Picasso
var picasso = alert('Good choice! The Tate has a ton of Picasso’s finest work. Enjoy yourself!');

//User chose Warhol
var warhol = alert('I’m surprised! His work is polarizing but he certainly has his place in the 20th century art scene. Make sure you are rested, the Tate is a huge place!');

//----------End (London > Tate) choice sequence--------

//--------Begin (London > Big Ben) choice sequence-----

//User chose Big Ben and is asked preferred aspect
var bigBen = 'Time is on your side! Is it the History or the Architecture that interests you?';
var benChoice = 'History' || 'Architecture';

//User chooses either History or Architecture
if (benChoice ==="History") {
  prompt(history);
} else {
  prompt(architecture);
}

//User chose History and is asked a historical question
var history = 'Riddle me this then…what is the current name of Big Ben according to locals? Elizabeth Tower or Clock Tower? No googling!!';
var towerChoice = 'Elizabeth' || 'Clock';

//User chooses either Elizabeth or Clock as the name
if (towerChoice ==="Elizabeth") {
  prompt(elizabeth);
} else {
  prompt(clock);
}

//User chose Elizabeth which is correct
var elizabethTower = alert('Correct! The tower was renamed Elizabeth Tower in 2012 to celebrate the Diamond Jubilee of Elizabeth II.
  Show off your impressive knowledge to your mates when you get there!');

//User chose Clock which is incorrect (shame!)
var clockTower = 'Close, but no cigar! The tower was called by that name until 2012 when it was renamed to Elizabeth Tower to celebrate the Diamond Jubilee of Elizabeth II. Don’t feel bad, we Americans aren’t the best with foreign facts.';

//---------End (Big Ben > History) choice sequence-----------------

//-------Begin (Big Ben > Architecture) choice sequence------------

//User chose Architecture and is asked how tall the tower is
var architecture = 'Let's test your knowledge then. How many feet tall would you guess Big Ben is? ';










if (londonChoice ==="Tate") {
  prompt(tate);
} else {
  prompt(bigBen);
}

