
// contenu des énigmes
let enigmes = [{
    "text": "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’ une Dora Milaje!",
    "enigme": "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
    "reponse": "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
    "titre": "Voici la transicription de l’alphabet:",
    "note": `<span>A</span> = A ; <span>B</span> = b ; <span>C</span> = c ; <span>D</span> = d ; <span>E</span> = e ; <span>F</span> = f ; <span>G</span> = g ; <span>H</span> = h ; <span>I</span> = i ; <span>J</span> = j ; 

    <span>K</span> = k ; <span>L</span> = l ; <span>M</span> = m ; <span>N</span> = n ; <span>O</span> = o ; <span>P</span> = p ; <span>Q</span> = q ; <span>R</span> = r ; <span>S</span> = s ; <span>T</span> = t ;
    
    <span>U</span> = u ; <span>W</span> = w ; <span>X</span> = x ; <span>Y</span> = y ; <span>Z</span> = z`
},
{
    "text": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
    "enigme": "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    "reponse": "1",
    "titre": "Le savais-tu?",
    "note": "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E.En pourcentage de fréquence, la lettre est utilisée à 14 % dans une phrase.Et si tu regardais quel symbole revient le plus souvent ? "
},
{
    "text": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
    "enigme": "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    "reponse": "1",
    "titre": "Le savais-tu?",
    "note": "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
}
];

let send = document.getElementById('send'); //bouton envoyer
let result = document.getElementById('result'); //formulaire
let num = document.getElementById('num'); //numéro de l'énigme
let popup = document.querySelector(".popup1"); //popup
let popupTitle = document.getElementById('popup-title'); //titre du popup
let message = document.getElementById('message'); //message du popup
let text = document.querySelector(".p2"); //description de l'énigme
let enigme = document.getElementById('enigme'); //énigme
let titre = document.getElementById('titre'); //titre de la note à droite
let note = document.querySelector(".pantherenigme2-text2"); //note à droite
let response = document.getElementById('rep'); //réponse (input)

let currentIndex = 0;
let status = document.querySelector("#status"); //bouton dans le popup

let popup2 = document.querySelector(".popup2"); //popup à la fin de l'énigme si la réponse a été correcte
let status2 = document.querySelector("#status2"); //bouton dans le popup fin du quizz

// actions lors de l'envoi de la réponse
result.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (currentIndex < enigmes.length) {

    // Vérifions que la réponse est correcte
    if (response.value.toLowerCase().trim() === enigmes[currentIndex].reponse.toLowerCase().trim()) {
      popupTitle.innerHTML = 'Bravo !';
      message.innerHTML = 'Tu as trouvé la réponse ! <br> Es-tu prêt pour l\'énigme suivante ?';
      status.innerHTML = "QUESTION SUIVANTE";
      popup.style.display = "block";
      
    //   modifications du contenu
      text.innerHTML = enigmes[currentIndex].text;
      enigme.style.fontSize = '1em';
      enigme.style.fontFamily = 'cantarell';
      enigme.style.wordSpacing = '0.5em';
      enigme.innerHTML = enigmes[currentIndex].enigme;
      titre.innerHTML = enigmes[currentIndex].titre;
      note.innerHTML = enigmes[currentIndex].note;
      num.innerText = currentIndex + 1;
      
    //   conditions pour les popups
      if (currentIndex < enigmes.length - 1) {
        status.removeEventListener('click', restartQuiz);
        status.addEventListener('click', showNextQuestion);
      } else {
        if (response.value.toLowerCase().trim() === enigmes[currentIndex].reponse.toLowerCase().trim()) {
            popup2.style.display = "block";
            popup.style.display = "none";
           
            status2.addEventListener('click', revenirAccueil);
        }
      }
      
      response.value = ""; // Effacer le contenu de l'input
      
    } else {
      popupTitle.innerHTML = 'Zut !';
      message.innerHTML = 'Ce n\'est pas la bonne réponse ! Tentez encore.';
      status.innerHTML = "RECOMMENCER";
      popup.style.display = "block";
      status.removeEventListener('click', showNextQuestion);
      status.addEventListener('click', restartQuiz);
    }
  }
});

status.addEventListener('click', showNextQuestion);

// fonctions utilisées

function showNextQuestion() {
  currentIndex++;

  if (currentIndex < enigmes.length) {
    popup.style.display = "none"; // Cacher le popup

    text.innerHTML = enigmes[currentIndex].text;
    enigme.style.fontSize = '1em';
    enigme.style.fontFamily = 'cantarell';
    enigme.style.wordSpacing = '0.5em';
    enigme.innerHTML = enigmes[currentIndex].enigme;
    titre.innerHTML = enigmes[currentIndex].titre;
    note.innerHTML = enigmes[currentIndex].note;
    num.innerText = currentIndex + 1;

    response.value = ""; // Effacer le contenu de l'input
  }

}

function restartQuiz() {
  popup.style.display = "none";
  response.value = ""; // Effacer le contenu de l'input
}

function revenirAccueil() {
  location.reload();
  window.location.href = 'index.html';
}


// MINUTEUR
// Récupérer l'élément <span> du minuteur
const minuteurElement = document.getElementById('minuteur');

// Définir le temps initial du minuteur (24 heures)
let tempsRestant = 86400;

// Fonction pour mettre à jour le minuteur
function mettreAJourMinuteur() {
  // Calculer les heures, minutes et secondes restantes
  const heures = Math.floor(tempsRestant / 3600);
  const minutes = Math.floor((tempsRestant % 3600) / 60);
  const secondes = tempsRestant % 60;
  
  // Afficher le temps restant dans le format hh:mm:ss
  minuteurElement.textContent = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;

  // Vérifier si le temps restant est écoulé
  if (tempsRestant === 0) {
    // Redirection vers l'accueil
    window.location.href = 'index.html';
  } else {
    // Décrémenter le temps restant d'une seconde
    tempsRestant--;
  }
}

// Appeler la fonction de mise à jour du minuteur toutes les secondes
const interval = setInterval(mettreAJourMinuteur, 1000);

// Exécuter la redirection lorsque le minuteur atteint 0
setTimeout(() => {
  clearInterval(interval);
  window.location.href = 'nom-de-la-page.html';
}, 86400000); // 24 heures (86 400 000 millisecondes)
