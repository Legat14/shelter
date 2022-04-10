//------List card button hover when card hovered------

const allListCards = document.querySelectorAll('.list__card');

allListCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    const button = card.querySelector('button');
    button.classList.add('button-secound_hover');
  });
});

allListCards.forEach(card => {
  card.addEventListener('mouseout', () => {
    const button = card.querySelector('button');
    button.classList.remove('button-secound_hover');
  });
});