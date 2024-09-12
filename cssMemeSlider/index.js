const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const caption = document.querySelector('.caption'); // Элемент для подписей

const captions = [
  "Hello, I'm Charly!",
  "Hello, I'm Freddie!",  
  "Hello, I'm Jennifer!",
  "Hello, I'm Katrine!"
];

let currentSlide = 0;

function updateSlider(index) {
  // Обновляем активный слайд
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
    slide.classList.toggle('active', i === index);
  });

  // Обновляем активный индикатор
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });

  // Обновляем текст подписи
  caption.textContent = captions[index];
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    updateSlider(currentSlide);
  });
});