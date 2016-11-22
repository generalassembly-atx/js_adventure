/* Choose your own adventure by Gina Fitzgerald copyright November 21, 2016*/

var user_name = prompt("What is your name?");
//Welcome
//Scenerio: passing a boring class
alert("Welcome "+ user_name+ " to the most boring class of your college career. Let's predict your success baised on a quick survey.");

var attend_class = prompt("true or false: you attend your 2 hour 8:00am class lectures(T/F)");
//1. Go to class
if (attend_class.toUpperCase() === "T" || attend_class.toUpperCase === "yes") {
  var class_notes = prompt("This bodes well for you. True or False: You take notes");
  //Take notes
  if (class_notes.toUpperCase === "F") {
    var class_study = prompt("do you study, group study or party before the test? (S/G/P)");
    switch(class_study) {
    //study-
    case "S":
      alert("you get an A!");
      break;
    //group study-
    case 'G':
      alert("you get a B!");
      break;
    //party-
    case 'P':
      alert("you passed with a C!");
      break;
    default:
      var class_study = prompt("Be sure to answer with an upper case letter. do you study, group study or party before the test? (S/G/P)");
    }
  } else {   //no notes
      var class_study = prompt("do you group study or party before the test? (G/P)")
      switch(class_study) {
        case "G":
          alert("You passed with a B");
          break;
        case "P":
          alert("you just narrowly passed with a D");
          break;
      }
  }
} else if (attend_class.toUpperCase() === "F") { //don't attend class
  var beg_teacher = prompt("The attendance policy is very strict. true or false, you are willing to beg the teacher for extra credit");
  if (beg_teacher.toUpperCase === "T") { //beg teacher for extra credit
    alert("Your begging allowed you to pass with a C-");
  } else {alert("Ouch! You'll have to repeat this class in summer school.")}
} else {var attend_class = prompt("Be sure to answer with the letters T or F. Please reload and try again. ")}
