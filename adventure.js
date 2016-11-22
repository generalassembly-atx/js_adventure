
var firstName = prompt('what is your name?');
var dept = prompt('Nice to meet you '+firstName+'. Are you working in Sales, Accounting or HR?');
  if ((dept==='sales')||(dept==='Sales')) {
    var dwightOrandy = prompt('Alright! Lets get to sellin that paper. Would you like to sit next to Dwight or Andy?');
  }
    if ((dwightOrandy==='Dwight')||(dwightOrandy==='dwight')) {
      var acceptOrReject = prompt('Splendid! Dwight has offered to take you under his wing as the Assistant to the Assistant to the Regional Manager. Do you accept?');
    }
        if ((acceptOrReject==='yes')||(acceptOrReject==='Yes')) {
        alert('Dwight is impressed with your eagerness and your willingness to serve.');
    }   else if ((acceptOrReject==='no')||(acceptOrReject==='No')) {
        alert('Dwight respects your humility and patience.')
  } else if((dwightOrandy==='Andy')||(dwightOrandy==='andy')) {
      var byJim = prompt('Be careful not to get on his bad side, he has anger management issues. Do you want to sit next to Jim instead?');
  }
        if ((byJim==='yes')||(byJim==='Yes')) {
          alert('Good call. For your first task as a new salesman, you must put all of Dwights office supplies in Jello');
     }  else if ((byJim==='no')||(byJim==='No')) {
          alert('Suit yourself. If you ever find yourself in dangerous waters just ask him about his time at Cornell.');
 } else if ((dept==='accounting')||(dept==='Accounting') ){
    var angelaOrkevin = prompt('Awesome! Would you like to sit next to Angela or Kevin?');
 }
        if ((angelaOrkevin==='Angela')||(angelaOrkevin==='angela')) {
          var numberPets = prompt('Weird. She wants to know how many pets you have:');
        }
          if (numberPets>=1) {
            alert('She likes you already!');
}         else if (numberPets<1) {
            alert('Uh-oh, it may be awhile before she warms up to you.');
}       else if ((angelaOrkevin==='Kevin')||(angelaOrkevin==='kevin')) {
          var responseOscar = prompt('Ugh. Hes busy looking at pictures of food on his computer. Would you like Oscar to show you the ropes?');
        } if ((responseOscar==='yes')||(responseOscar==='Yes')) {
            alert('Good deal. He has been here for 9 years so he really knows what he is doing.');
        } else if ((responseOscar==='no')||(responseOscar==='No')) {
            alert('Okay but just so you know, this could take awhile.');
} else if ((dept==='HR')||(dept==='hr')) {
    var justToby = alert('WooHoo! You get to sit next to Toby. The first order of business is to have a meeting with Michael about the circumstances in which he hit another employee with his company car.')
}
