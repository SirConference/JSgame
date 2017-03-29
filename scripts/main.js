var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");
var sentence = document.getElementById("sentence");
var doorAndCharacterL1 = document.getElementById("doorAndCharacterL1");
var doorAndCharacterL2 = document.getElementById("doorAndCharacterL2");
var doorAndCharacterL3 = document.getElementById("doorAndCharacterL3");
var doorAndCharacterR1 = document.getElementById("doorAndCharacterR1");
var doorAndCharacterR2 = document.getElementById("doorAndCharacterR2");
var doorAndCharacterR3 = document.getElementById("doorAndCharacterR3");
var doorsAndCharacters = [doorAndCharacterL1, doorAndCharacterL2, doorAndCharacterL3, doorAndCharacterR1, doorAndCharacterR2, doorAndCharacterR3];

var frederiqueMartinez = '../images/characters/Fredo/rouvfull.png';
var richardMartinez = '../images/characters/Martinez/martifull.png';
var jcBeaux = '../images/characters/Beaux/beauxfull.png';
var denysChomel = '../images/characters/Chomel/chomfull.png';
var joelBourienne = '../images/characters/Bourienne/bouboufull.png';
var pierreDeBeauchene = '../images/characters/DeBeauchene/dbcfull.png';
var gregoirePuget = '../images/characters/Puget/pugetfull.png';
var danielVillaMonteiro = '../images/characters/Villa/montfull.png';
var agnesRouvrais = '../images/characters/Rouvrais/rouvfull.png';
var priscilleMarty = '../images/characters/Marty/martyfull.png';
var claraBoissier = '../images/characters/Boissier/boissfull.png';
var characters = [frederiqueMartinez, richardMartinez, jcBeaux, denysChomel, joelBourienne, pierreDeBeauchene, gregoirePuget, danielVillaMonteiro, agnesRouvrais, priscilleMarty, claraBoissier];

var frederiqueMartinezQuotes = ["L'opacité, c'est la transparence","Moi j'aurais pas fait comme ca","Alors cet outil on l'utilise à la mano","A 00h01 c'est fini, je relève","Si vous ne suivez pas le tutoriel, vous n'avez pas créativité"];
var richardMartinezQuotes = ["Donnez moi un chiffre !","Vous ! Au tableau !","Faîtes-moi un plan, vous avez 5 minutes.","Faites-moi la gépolitique de l'ours polaire","Il faut lire les enfants, au lieu de jouer à Facebook !"];
var jcBeauxQuotes = ["Il n'y a rien de fait, s'il reste à faire", "Faites toujours très bien !"];
var denysChomelQuotes = ["Vous êtes désormais un Héticien, à vous de vous comporter comme tel tel","","","",""];
var joelBourienneQuotes = ["il y a un sac dans mon allée","Vous êtes sur mon estrade","Non, c'est moche","Y'a des gens bizarres dans votre groupe","Bienvenue en H1 l'année prochaine","Ca fera -8000 pour votre groupe","Vous prendrez votre stylo Cartier et vous soulignerez de pourpre et d'argent"];
var pierreDeBeaucheneQuotes = ["Avez-vous une question ? ... Non, ok on continue","C'est marrant que vous assimiliez cette notion, moi il m'a fallu plus de temps"];
var gregoirePugetQuotes = ["Alors ça on utilise jamais, mais sachez au moins que ca existe","Mais on ne peut rien vous apprendre en fait, vous êtes trop forts","vous êtes ma meilleur classe"];
var danielVillaMonteiroQuotes = ["Qu'est-ce qu'internet ?","Qu'est-ce qu'un ordinateur avec vos mots","Vous êtes un moldu si vous ne connaissez pas Richard Stallman !"];
var agnesRouvraisQuotes = ["Faites-moi une structure en spaghetti et chamallow","What is Batna","Ok, talk time!"];
var priscilleMartyQuotes = ["Ce sont des inepties !!!","J'ai corrigé la RATP et je l'ai partagé sur Facebook","RépercuSSion, il n'y a pas de T !"];
var claraBoissierQuotes = ["Qu'est-ce que vous avez fait ce week-end ?","Oulala, je suis en retard sur le cours","Qu'est ce qu'une machine coercitif ?"];
var quotes = [frederiqueMartinezQuotes, richardMartinezQuotes, jcBeauxQuotes, denysChomelQuotes, joelBourienneQuotes, pierreDeBeaucheneQuotes, gregoirePugetQuotes, danielVillaMonteiroQuotes, agnesRouvraisQuotes, priscilleMartyQuotes, claraBoissierQuotes];

function moveADoor(){
  var random =Math.floor(Math.random()*doorsAndCharacters.length);
  if (doorsAndCharacters[random].classList.contains("close") === true){
    doorsAndCharacters[random].classList.remove("close");
    randomCharacter(doorsAndCharacters[random]);
  }
  else {
    doorsAndCharacters[random].classList.add("close");
  }
}


function randomCharacter(oldCharacter){
  var character = oldCharacter.lastElementChild.lastElementChild; // saisie balise img
  var randomBis =Math.floor(Math.random()*characters.length);
  
  return character.src=characters[randomBis];
}

// **************************** ACTIONS ****************************

buttonStart.addEventListener(
  'click',
  function(){
    rules.style.display ="none";
  },
  false
);

setInterval(moveADoor, 1000);

// clearInterval(x);


// souris
// tumblewheed
// sons personnages ?
// voir comment gérer le son
// approfondir/illustrer l'event de communication