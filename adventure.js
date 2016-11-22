var name= prompt('Whats your name?');
console.log(name)

var whatsHappening = prompt('Whats shaking? 1.watchingTv 2. starting a fire 3. writin code')
console.log(whatsHappening);

if (whatsHappening==="1"){
  console.log("Kind lame, anything good on?")
  var tvAnswer= prompt("Kinda lame, anything good on? 1.yes 2.no")
  if (tvAnswer==="2"){
    console.log("yeah go ahead and get some sleep")
  } else {
    prompt("really? what are you watching? 1.espn 2.fox 3.cbs")
  }
    console.log("its all the same")
}

if (whatsHappening==="2"){
  console.log("We love it!  how many fires you built this year?")
  var fireAnswer=prompt("we love it! How many fires have you built this year 1.>5 2.>15 3.>25")
  if (fireAnswer==="1"){
    console.log("rookie")
  }if (fireAnswer==="2"){
    console.log("git-r-done")
  }if (fireAnswer==="3"){
    console.log("yeah c'mon")
  }
}

if (whatsHappening==="3"){
  console.log("Niiiice, how's it going? 1. it sucks 2. not bad 3. okay 4. I love it")
  var codeAnswer=prompt("Niiiice, how's it going? 1. it sucks 2. not bad 3. okay 4. I love it")
  if (codeAnswer==="1"){
    console.log("sorry homes")
} if (codeAnswer==="2"){
    console.log("cool kewl")
} if (codeAnswer==="3"){
    console.log("alright alright")
} if (codeAnswer==="4"){
    console.log("word up")
  }
}
