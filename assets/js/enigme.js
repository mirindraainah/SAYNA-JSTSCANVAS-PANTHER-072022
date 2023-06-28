
let enigmes = [{
    "text": "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’ une Dora Milaje!",
    "enigme": " <span class='panthera-letter'>SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS </span>",
    "reponse": "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
    "note": "<p>Voici la transicription de l’alphabet :</p> <p class='alphabet> A = < span > A < /span> ; B = <span> B </span > ;C = < span > C < /span> ; D = <span> D </span > ;E = < span > E < /span> ; F = <span> F </span > ;G = < span > G < /span> ; H = <span> H </span > ;I = < span > I < /span> ; J = <span> J </span > ;K = < span > K < /span> ; L = <span> L </span > ;M = < span > M < /span> ; N = <span> N </span > ;O = < span > O < /span> ; P = <span> P </span > ;Q = < span > Q < /span> ; R = <span> R </span > ;S = < span > S < /span> ; T =<span> T </span > ;U = < span > U < /span> ; W = <span> W </span > ;X = < span > X < /span> ; Y = <span> Y </span > ;Z = < span > Z < /span> </p > "
},
{
    "text": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
    "enigme": "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    "reponse": "1",
    "note": "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E.En pourcentage de fréquence, la lettre est utilisée à 14 % dans une phrase.Et si tu regardais quel symbole revient le plus souvent ? "
},
{
    "text": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
    "enigme": "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    "reponse": "1",
    "note": "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
}
];

// 
let send = document.getElementById('send');
let result = document.getElementById('result');
const response = result.querySelector('input[name="response"]').value.toLowerCase().trim();

let currentIndex = 0; 

send.addEventListener('click', () => {
    
    // if(response == enigmes[currentIndex].reponse){

    //     currentIndex = (currentIndex + 1) % enigmes.length;
    // }
    
});