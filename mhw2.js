// script.js

document.addEventListener('DOMContentLoaded', function() {
  const slides = ['slide1', 'slide2', 'slide3'];
  let currentSlide = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      document.querySelector('#slideshow').classList.remove(slides[i]);
    }
    document.querySelector('#slideshow').classList.add(slides[index]);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  setInterval(nextSlide, 5000); // Cambia slide ogni 5 secondi

  // Aggiungi event listener per lo scorrimento delle immagini al clic
  document.querySelector('#slideshow').addEventListener('click', nextSlide);

// menu a scomparsa

  menu=document.querySelector(".menu");
  menu.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  }

// scroll verso l'alto

const torna_su = document.querySelector(".torna_su");

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 600) {
        torna_su.style.display = "block";
    } else {
        torna_su.style.display = "none";
    }
});

torna_su.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// attributi data mostra colori


const photoList = [
  'duke_nero.jpg',
  'duke_arancione.jpg'
];

const albumView = document.querySelector('#album-view');
const modalView = document.querySelector('#modal-view');
const mostraImmagineButton = document.getElementById('mostraImmagineButton');

// Funzione per creare e aggiungere le anteprime delle immagini
function createThumbnail(src) {
  const thumbnail = document.createElement('img');
  thumbnail.src = src;
  thumbnail.classList.add('thumbnail');
  thumbnail.addEventListener('click', () => openModal(src));
  return thumbnail;
}

// Aggiungi le anteprime delle immagini alla galleria
function addThumbnails() {
  photoList.forEach(photoSrc => {
    const thumbnail = createThumbnail(photoSrc);
    albumView.appendChild(thumbnail);
  });
}

// Funzione per aprire l'immagine ingrandita
function openModal(src) {
  const image = document.createElement('img');
  image.src = src;
  modalView.innerHTML = '';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  modalView.addEventListener('click', closeModal);
}

// Funzione per chiudere l'immagine ingrandita
function closeModal() {
  modalView.innerHTML = '';
  modalView.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  modalView.removeEventListener('click', closeModal);
}

// Gestisci il clic sul pulsante "Mostra Immagini"
mostraImmagineButton.addEventListener('click', () => {
  albumView.classList.toggle('hidden'); 
  if (!albumView.classList.contains('hidden')) {
    
    addThumbnails();
  } else {
    
    albumView.innerHTML = '';
  }
});


















   });


  


