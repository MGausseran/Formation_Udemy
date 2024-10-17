// Etape 1 - Sélectionner nos éléments

let formulaire = document.querySelector('#formulaire');

let input = document.querySelector('#prix');

let error = document.querySelector('small');

let coups = 0;
let prixChoisi;
// Etape 2 - Cacher l'erreur
error.style.display ='none';
// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random()*1000);
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if (isNaN(input.value)) {
      error.style.display ='block';
  }
  else {
    error.style.display ='none';
  }
});
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
  
  e.preventDefault();
  
  if(isNaN(input.value) || input.value==''){
    input.style.borderColor='red';

  }
  else {
    input.style.borderColor='silver';
    coups++;
    prixChoisi = input.value;
    verifier(prixChoisi);
    input.value = '';
  }
})
// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  
let alerte = document.createElement('div')
  if (nombre < randomNumber) {
    alerte.textContent = "#"+coups + ' - ' + input.value +" C'est plus !";
    alerte.style.color = "#fff";
    alerte.style.backgroundColor = 'red';
  }
  else if (nombre > randomNumber) {
    alerte.textContent = "#"+coups +' - ' + input.value + " C'est moins !";
    alerte.style.color = "#fff";
    alerte.style.backgroundColor = 'blue';
  }
  else {
    alerte.textContent = "#"+coups + ' - ' + input.value +" C'est le juste prix ! Félicitations !";
    alerte.style.color = "#fff";
    alerte.style.backgroundColor = 'green';
  }
formulaire.append(alerte);
}