// Burger menu
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
burger.addEventListener('click', ()=> navMenu.classList.toggle('open'));

// Hero slider images
const hero = document.getElementById('hero-slider');
const heroImages = [
  'https://www.intimissimi.com/ua/media/wysiwyg/homepage/2021/hero/hero-1.jpg',
  'https://www.intimissimi.com/ua/media/wysiwyg/homepage/2021/hero/hero-2.jpg',
  'https://www.intimissimi.com/ua/media/wysiwyg/homepage/2021/hero/hero-3.jpg'
];
let currentSlide = 0;
function showNextSlide() {
  currentSlide = (currentSlide + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[currentSlide]}')`;
}
hero.style.backgroundImage = `url('${heroImages[0]}')`;
setInterval(showNextSlide, 5000);

// Price filter display
const priceRange = document.getElementById('priceRange');
const priceVal = document.getElementById('priceVal');
if(priceRange && priceVal){ priceRange.addEventListener('input', ()=> priceVal.textContent = '₴ ' + priceRange.value); }

// Filters submit
const filtersForm = document.querySelector('.filters form');
if(filtersForm){ filtersForm.addEventListener('submit', e=>{ e.preventDefault(); alert('Фильтры применены'); }); }
