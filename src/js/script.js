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


const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -260, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +260, behavior: "smooth" });
});
}