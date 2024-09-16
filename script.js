// script.js

const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

// Função para abrir/fechar o menu lateral
openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    
    if (sidebar.classList.contains('open')) {
        openBtn.textContent = '✖';
    } else {
        openBtn.textContent = '☰';
    }
});

// Modo claro/escuro
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Modo Escuro';
    } else {
        toggleThemeButton.textContent = 'Modo Claro';
    }
});


// script.js
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move to the targeted slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
};

// When clicking next, move one slide to the right
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0]; // Loop to the first slide
    moveToSlide(track, currentSlide, nextSlide);
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
});

// When clicking prev, move one slide to the left
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Loop to the last slide
    moveToSlide(track, currentSlide, prevSlide);
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
});

// Make this a dynamic information probably updated by an API to keep it up to date 
const importantDates = {
    GP: [
        { date: '11/11', event: 'Prova 1' },
        { date: '25/11', event: 'Trabalho Final' }
    ],
    GF: [
        { date: '01/12', event: 'Prova 1' },
        { date: '15/12', event: 'Trabalho Final' }
    ]
};

// Function to dynamically insert the dates into the HTML
function populateDates() {
    const gpList = document.querySelector('.dates-column:nth-child(1) .date-list');
    const gfList = document.querySelector('.dates-column:nth-child(2) .date-list');

    importantDates.GP.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.date}</span> ${item.event}`;
        gpList.appendChild(li);
    });

    importantDates.GF.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.date}</span> ${item.event}`;
        gfList.appendChild(li);
    });
}

populateDates();
