var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");
var sentence = document.getElementById("sentence");
var doorL1 = document.getElementById("doorL1");
var doorL2 = document.getElementById("doorL2");
var doorL3 = document.getElementById("doorL3");
var doorR1 = document.getElementById("doorR1");
var doorR2 = document.getElementById("doorR2");
var doorR3 = document.getElementById("doorR3");
var doors = [doorL1, doorL2, doorL3, doorR1, doorR2, doorR3];
var randomOpen

var frederiqueMartinezQuotes = ["L'opacité, c'est la transparence","Moi j'aurais pas fait comme ca","Alors cet outil on l'utilise à la mano","A 00h01 c'est fini, je relève","Si vous ne suivez pas le tutoriel, vous n'avez pas créativité"];
var richardMartinezQuotes = ["Donnez moi un chiffre !","Vous ! Au tableau !","Faîtes-moi un plan, vous avez 5 minutes.","Faites-moi la gépolitique de l'ours polaire","Il faut lire les enfants, au lieu de jouer à Facebook !"];
var jcBeauxQuotes = ["Il n'y a rien de fait, s'il reste à faire"];
var denysChomelQuotes = ["Vous êtes désormais un Héticien, à vous e vous comportez comme tel","","","",""];
var joelBourienneQuotes = ["il y a un sac dans mon allée","Vous êtes sur mon estrade","Non, c'est moche","Y'a des gens bizarres dans votre groupe","Bienvenue en H1 l'année prochaine","Ca fera -8000 pour votre groupe","Vous prendrez votre stylo Cartier et vous soulignerez de pourpre et d'argent"];
var pierreDeBeaucheneQuotes = ["Avez-vous une question ? ... Non, ok on continue","C'est marrant que vous assimiliez cette notion, moi il m'a fallu plus de temps"];
var gregoirePugetQuotes = ["Alors ça on utilise jamais, mais sachez au moins que ca existe","Mais on ne peut rien vous apprendre en fait, vous êtes trop forts","vous êtes ma meilleur classe"];
var danielVillaMonteiroQuotes = ["Qu'est-ce qu'internet ?","Qu'est-ce qu'un ordinateur avec vos mots","Vous êtes un moldu si vous ne connaissez pas Richard Stallman !"];
var agnesRouvraisQuotes = ["Faites-moi une structure en spaghetti et chamallow","What is Batna","Ok, talk time!"];
var priscilleMartyQuotes = ["Ce sont des inepties !!!","J'ai corrigé la RATP et je l'ai partagé sur Facebook","RépercuSSion, ya pas de T !"];
var claraBoissierQuotes = ["Qu'est-ce que vous avez fait ce week-end ?","Oulala, je suis en retard sur le cours","Qu'est ce qu'une machine coercitif ?"];
var quotes = [frederiqueMartinezQuotes, richardMartinezQuotes, jcBeauxQuotes, denysChomelQuotes, joelBourienneQuotes, pierreDeBeaucheneQuotes, gregoirePugetQuotes, danielVillaMonteiroQuotes, agnesRouvraisQuotes, priscilleMartyQuotes, claraBoissierQuotes];

function moveADoor(){
  var random =Math.floor(Math.random()*doors.length);
  if (doors[random].classList.contains("close") === true){
    doors[random].classList.remove("close");
  }
  else{
    doors[random].classList.add("close");
  }
}

setInterval(moveADoor, 1000);

/*clearInterval(x);*/


buttonStart.addEventListener(
  'click',
  function()
  {
    rules.style.display ="none";
  },
  false
);

// compteur score
// barre niveau
// musique
// sons personnages
// arme (son, ...)
// detourage bonhommes full
// mouvements sur place (?)