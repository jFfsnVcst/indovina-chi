document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Se è già scartata, la riattivo
      if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
        card.style.opacity = '1';
      } else {
        card.classList.add('hidden');
        card.style.opacity = '0.2';
      }
    });
  });

  document.getElementById('reset-button').addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('hidden');
      card.style.opacity = '1';
    });
  });
});
