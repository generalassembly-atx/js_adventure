var kind = prompt('What kind of egg are you? Animal, Edible, or Other');

if (kind === 'Animal') {
  animal = prompt('Are you Magical or Scientific?');
    if (animal === 'Magical') {
      alert("You're a Golden Goose Egg!");
    } else {
      alert("You're a Dinosaur Egg!");
    }
}
else if (kind === 'Edible') {
  edible = prompt('Are you Sure?');
   if (edible === 'Yes') {
    alert("You're Poached!");
  } else {
    alert("You're an Egghead!");
  }
}
else {
  age = parseInt(prompt("What is your age?"));
   if (age === 10) {
    alert("Tu es Cascarónes!");
  } else if (age < 10) {
    alert("You're an Easter Egg!");
  } else {
    alert("Congratulations, you're fertile!");
  }
}
