function trip(){

  function start(){
    place = prompt("Time for your amazing vacation! Would you like to go to Paris or Dijon?");
    if(place === "Paris"){
      paris();
    }else{
      dijon();
    };

  }

  function paris(){
    place = "paris";
    place = prompt("You're in the classic metropolis of Paris! Would you like to head to Lyon or Marseilles now?");
    if(place === "Lyon"){
      lyon();
    }else{
      marseilles();
    };
  }
  function dijon(){
    place = "dijon";
    place = prompt("You're in the quaint rural city of Dijon! Would you like to head to Marseilles, Milan or Monaco?");
    if(place == "Marseilles"){
      marseilles();
    }else if(place === "Milan"){
      milan();
    }else{
      monaco();
    };
  }
  function lyon(){
    place = "lyon";
    place = prompt("You're in the beautiful city of Lyon, second largest in France! Would you like to head to Dijon, Gourdes or Milan next?");
    if(place === "Dijon"){
      dijon();
    }else if(place === "Gourdes"){
      gourdes();
    }else{
      milan();
    };
  }
  function marseilles(){
    place = "marseilles";
    place = prompt("You're in the amazing seaside port city of Marseilles! Where would you like to go next: Gourdes or Dijon?");
    if(place === "Gourdes"){
      gourdes();
    }else{
      dijon();
    };
  }
  function milan(){
    place = "milan";
    place = prompt("You're in the highly sophisticated city of Milan, Italy! Would you like to shoot over to Paris, or take a dip in the waters of Nice?");
    if(place === "Paris"){
      paris();
    }else{
      nice();
    };
  }
  function monaco(){
    place = "";
    var number = prompt("You're in fabulous Monaco, home of Monte Carlo casino! Time to spin the roulette wheel. Pick a number between one and 100!");
    if(number < 50){
      nice();
    }else if(number <= 100){
      paris();
    }else{
      alert("Invalid Number!");
      monaco();
    };
  }
  function gourdes(){
    place = "gourdes";
    place = prompt("You're in the exquisite hilltop town of Gourdes! Would you like to go to Milan or back home?");
    if(place === "Milan"){
      milan();
    }else{
      home();
    };
  }
  function nice(){
    place = "nice";
    place = prompt("You're in the beautiful Mediterranean paradise of Nice, France! Would you like to head to Paris, or go back home?");
    if(place === "Paris"){
      paris();
    }else{
      home();
    };
  }
  function home(){
    place = "";
    alert("Welcome Home! Whew! That was a long trip!");
  }
  start();
}
trip();
