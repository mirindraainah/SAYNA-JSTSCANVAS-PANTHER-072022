
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

// 
let send = document.getElementById('send'); //bouton
let result = document.getElementById('result'); //formulaire
let num = document.getElementById('num'); //numéro de l'énigme
let popup = document.querySelector(".popup1"); //popup 1
let popupTitle = document.getElementById('popup-title');
let message = document.getElementById('message'); //message dans le popup


let response = document.getElementById('rep').value.toLowerCase().trim();

let i=1; 

result.addEventListener('submit', (event) => {
    event.preventDefault();
    i++;
    num.innerText = i;
    for(let currentIndex = 0; currentIndex<3; currentIndex++){
        if(response == enigmes[currentIndex].reponse.toLowerCase().trim()){
            popup.style.display = "block";
        }
    }


});