// Récupérer le bouton et le menu
const button = document.querySelector('header button');
const menu = document.querySelector('.menu');

// Ajouter un événement au clic du bouton
button.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
});
