// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Добавление товара в корзину
  const cartButtons = document.querySelectorAll('.btn');
  cartButtons.forEach(btn => {
    if (btn.textContent.includes('корзину') || btn.textContent.toLowerCase().includes('в корзину')) {
      btn.addEventListener('click', addToCart);
    }
  });

  // Обработка подписки на рассылку
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', handleSubscription);
  }

  // Плавный скролл по якорям
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
});

// Функция добавления в корзину
function addToCart(event) {
  event.preventDefault();
  const item = event.target.closest('.product-item');
  const title = item.querySelector('p').textContent;
  alert(`Товар «${title}» добавлен в корзину!`);
}

// Функция подписки
function handleSubscription(event) {
  event.preventDefault();
  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput.value;
  if (email && email.includes('@')) {
    alert(`Спасибо за подписку, ${email}!`);
    emailInput.value = '';
  } else {
    alert('Пожалуйста, введите корректный e-mail');
  }
}

// Плавный скролл
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  if (targetId.length > 1) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  }
}
