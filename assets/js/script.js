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

