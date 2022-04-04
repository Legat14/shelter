//------Make a friend button anchor------

const makeFriendBtn = document.querySelector('.not-only__button');
const ourFriendsSection = document.querySelector('.our-friends');

makeFriendBtn.addEventListener('click', () => {
  ourFriendsSection.scrollIntoView(true);
});