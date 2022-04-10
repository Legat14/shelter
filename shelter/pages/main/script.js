//------Make a friend button anchor------

const makeFriendBtn = document.querySelector('.not-only__button');
const ourFriendsSection = document.querySelector('.our-friends');

makeFriendBtn.addEventListener('click', () => {
  ourFriendsSection.scrollIntoView(true);
});

//------Carousel button link------

const getToKnowBtn = document.querySelector('.our-friends__button');

getToKnowBtn.addEventListener('click', () => {
  document.location.href = "../our-pets/index.html";
});

//------Carousel card button hover when card hovered------

const allCarouselCards = document.querySelectorAll('.carousel__card');

allCarouselCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    const button = card.querySelector('button');
    button.classList.add('button-secound_hover');
  });
});

allCarouselCards.forEach(card => {
  card.addEventListener('mouseout', () => {
    const button = card.querySelector('button');
    button.classList.remove('button-secound_hover');
  });
});