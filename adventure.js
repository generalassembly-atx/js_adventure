var welcome = confirm('Welcome to Shaun of the Dead - Javascript edition!  Ready to Play?');
if (welcome === true) {

home = prompt('Good morning Shaun! You\'ve got red on you, you\'ve got a wicked hangover, Liz just broke up with you, and to make matters worse ...THERE\'S A ZOMBIE IN THE GARDEN!  How do you defend yourself and your best mate Ed?   (a)-Cricket Bat or (b)-Record Collection');

    if(home === 'a') {
    	running = prompt('Cricket Bat...  Wise choice.  One down, 200 million to go! Unfortunately you and Ed are now in a dead sprint with a hoard of hungry brain-eaters on your heels.  So what\'s your fastest mile in minutes?');

      if(running <=6) {
    		winchester = prompt('Nice! You smoked them! You met up (and made up) with Liz and have arrived at the Winchester pub! Pour a draught and wait for all this to blow over? Not yet! Yep... still with the zombies.  You are being overrun.  Your game-plan is (a)-grab the actual Winchester above the bar and go Clint Eastwood all over their zombie asses, (b)-run and hide in the basement and hope for the best, or (c)-screw it; pour yourself a beer.  ');

        if(winchester === 'a') {
    			cowboy = prompt('You\'re a regular Wyatt Earp and single handedly save the day! You and your friends even have the entire bar to yourself for the evening!');
    		}
        if(winchester === 'b') {
    			hide = prompt('Good idea... run and hide in the basement and tortuously await the inevitable. It all works out well though, because when the zombies find you, you have an open and honest dicsussion about their needs versus your needs, and you both come away with a better understanding of eachothers perspectives.');
    		}
        if(winchester === 'c') {
    			beer = prompt('Lush...');
    		}
    	}

      else if(running >6) {
    		caught = prompt('You skipped cardio-day at the gym one too many times and have been caught!  Do you make your last stand together and go out fighting? Sacrifice yourself to save your best friend Ed? Or trip Ed and make your getaway? (a)-last stand, (b)-sacrifice,  or (c)-trip');

        if(caught === 'a') {
    			legend = prompt('Blaze of Glory!  Class act.  Just like Crockett and Bowie, ... or Thelma and Louise ... your choice.')
    		}
        else if(caught === 'b') {
    			legend = prompt('You, my heroic friend are the stuff of legend! Survivors of the zombie apocalypse  will sing your praises for generations to come!')
    		}

        else if(caught === 'c') {
    			villain = prompt('How could you? Besides, you get eaten later on anyways, so ha!')
    		}
    	}
    }
    else if(home === 'b') {
    	bitten = prompt('Interesting choice... An unholy minion of the damned comes for your brains and the best you\'ve got is Purple Rain and Meat Loaf\'s Greatest Hits?  You deserve that nasty bite on your arm!  THINK FAST! (a)-Amputate arm (b)-Try to suck out the "zombie poison" (c)-Take your chances... after all it\'s only a fleshwound!');

    	if(bitten === 'a') {
    		amputee = prompt('Live to fight another day!  I\'m thinking a chainsaw would look really nice on that arm.  Just saying... it worked for Bruce Campbell...');
    	}
      else if(bitten === 'b') {
    		sucker = prompt('That only works with snakes dummy.  You\'re kaput!');
    	}
      else if (bitten === 'c') {
    		zombieMode = prompt('ZOMBIE MODE! Welcome to the legions of the living dead!  Go forth and wreak your havoc upon the living!');
    	}
    }
} else {
    prompt('Lame....');
}
