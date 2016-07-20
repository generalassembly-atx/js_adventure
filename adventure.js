function getInput (){
  return prompt ("Type your answer here");
}

function getOccupation(){
  window.alert("You have been chosen for the 12th expedition into Area X, a transitional ecosystem and site of abnormal and paranormal phenomena. Names are not important for this  expedition, only your function matters. What is your occupation?");
  var occupation = getInput();
  if (occupation === "programmer" || occupation === "developer" || occupation === "biologist"){
    window.alert("Good, the Southern reach can use your skills.");
  }
  else{
    window.alert("Hmm..not sure why they chose you for this mission.");
  }
}
function getPOI(){
  window.alert("Now that you are back at basecamp, meet your team: an Anthropologist, a Psychologist, and a Surveyor with former military training. There are two points of interest, a light house (L), and a tunnel (T) of unknown origin. Which location do you wish to investigate? L = Lighthouse T = Tunnel S = Screw this! I'm headed back to the border!")
  var pointOfInterest = getInput();
  if (pointOfInterest === "L"){
    window.alert ("You and the psychologist decide to investigate the lighthouse. Do you want to explore the lower level(LL) or ascend the staircase(SC)?")
    lighthouseScene();
  }
  else if (pointOfInterest === "T"){
    window.alert("You and the Anthropologist go to a newly discovered tunnel. As you enter and survey the area, you notice the walls seem to be...breathing. A staircase spirals into the dark depths of the tunnel and a strange vine-like organism creates a cryptic message along the wall leading down. You (G) go down into the tunnel yourself or (A) send the anthropologist down.")
  }
  else if (pointOfInterest === "S"){
    window.alert("You make a mad dash back to the border only to be stopped by an Agent of the Southern Reach. You can surrender (S) or  retreat (R)");
  }
  else {
    window.alert("Invalid Entry");
    getPOI();
  }
}
function lighthouseScene (){
  if (getInput() === "LL"){
    window.alert("You explore the lower levels and find the remnants of a bloody warzone. You notice the psycholigist is nowhere to be found. Do you (R)return to basecamp or look (SC)upstairs for the psychologist?");
    if (getInput() === "R"){
      returnToBaseCamp();
    }
  }
  else if (getInput() === "SC"){
    window.alert("Take the stairs: At the top of the lighthouse you find a massive pile of journals that appear to be from the previous expeditions. As you read through them, you feel your mind collapsing and expanding at the same time as the Secrets of Area X flood into your brain. Your train of thought is interrupted by a terrible sound coming from the staircase. You (D) descend the staircase and investigate or try to (E) escape by taking a leap of faith to the sandy shore below.")
  }
}
function returnToBaseCamp(){
  window.alert("As you approach basecamp, the surveyor fires a warning shot and demands to know what happened to the psychologist/anthropologist. Do you (F) return fire or (N) attempt to negotiate with the surveyor.")
}
function gameManager(){
  getOccupation();
  getPOI();
}
gameManager();
