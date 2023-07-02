// canvas souris
var canvasM = document.getElementById('canvas-mouse');
var ctx1 = canvasM.getContext('2d');
var image = new Image();
image.src = 'assets/images/All pages/logo_souris_BP2_blanc.png'; 

function resizeCanvas() {
  canvasM.width = window.innerWidth;
  canvasM.height = document.documentElement.scrollHeight;
}

function drawMouseImage(x, y) {
  ctx1.clearRect(0, 0, canvasM.width, canvasM.height);
  ctx1.globalAlpha = 0.5; // Valeur d'opacité (entre 0 et 1)
  ctx1.drawImage(image, x - 25, y - 25, 50, 50); // Dessine l'image centrée sur la position de la souris
}

function handleMouseMove(e) {
  var x = e.clientX;
  var y = e.clientY + window.pageYOffset; // Ajouter le décalage de défilement
  drawMouseImage(x, y);
}

function handleWindowResize() {
  resizeCanvas();
}

// Redimensionner le canvas pour qu'il corresponde à la taille de la page
resizeCanvas();

// Charger l'image et dessiner la souris initiale
image.onload = function() {
  drawMouseImage(window.innerWidth / 2, window.innerHeight / 2);
};

// Gérer le mouvement de la souris
document.addEventListener('mousemove', handleMouseMove);

// Gérer le redimensionnement de la fenêtre
window.addEventListener('resize', handleWindowResize);


// cacher le modal
function hideModal() {
var modal = document.getElementById("myModal");
modal.style.display = "none";
}

// Réinitialisation des champs
function resetInputs() {
var inputs = document.getElementsByTagName('input');
var textareas = document.getElementsByTagName('textarea');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
}
textareas.value = '';
}

// Événement qui se déclenche lorsque la page est réactualisée
window.addEventListener('beforeunload', resetInputs);

const form = document.querySelector('form');
const modal = document.querySelector(".modal");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

