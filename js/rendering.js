import { randomOffers } from './create-offers.js';

//Rendering offers
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardsListFragment = document.createDocumentFragment();
const randomCards = randomOffers;

randomCards.forEach((card) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = `${card.offer.address.lat} ${card.offer.address.lng}`;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;

  const addType = () => {
    if (card.offer.type === 'Palace') {
      return 'Дворец';
    } else if (card.offer.type === 'Flat') {
      return 'Квартира';
    } else if (card.offer.type === 'House') {
      return 'Дом';
    } else if (card.offer.type === 'Bungalow') {
      return 'Бунгало';
    } else if (card.offer.type === 'Hotel') {
      return 'Отель';
    }
  };

  cardElement.querySelector('.popup__type').textContent = addType();
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardElement.querySelector('.popup__features').textContent = card.offer.features;
  cardElement.querySelector('.popup__description').textContent = card.offer.description;

  // if (card.offer.photos.length === 0) {
  //   cardElement.querySelector('.popup__photo').classList.add('hidden');
  // } else if (card.offer.photos.length === 1) {
  //   cardElement.querySelector('.popup__photo').src = card.offer.photos;
  // } else if (card.offer.photos.length > 1) {
  //   for (let i = 0; i < card.offer.photos.length; i++) {
  //     const img = document.createElement('img');
  //     img.classList.add('popup__photo');
  //     img.src = card.offer.photos;
  //     cardElement.querySelector('.popup__photos').appendChild(img);
  //   }
  // }

  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  cardsListFragment.appendChild(cardElement);
});
// cardsList.appendChild(cardsListFragment);

const preloadAvatar = document.getElementById('avatar');
const downloadAvatar = document.getElementById('preload-photo');
preloadAvatar.onchange = () => {
  const preloadPhotoFile = preloadAvatar.files[0];
  if (preloadPhotoFile) {
    downloadAvatar.src = URL.createObjectURL(preloadPhotoFile);
  }
};

const preloadHousing = document.getElementById('images');
const mainPhotoContainer = document.querySelector('.ad-form__photo-container');
preloadHousing.addEventListener('change', () => {
  const preloadPhotoFile = preloadHousing.files[0];
  if (preloadPhotoFile) {
    const housingWrapp = document.createElement('div');
    housingWrapp.classList.add('ad-form__photo');
    const housingPhoto = downloadAvatar.cloneNode(true);
    housingPhoto.src = URL.createObjectURL(preloadPhotoFile);
    housingWrapp.appendChild(housingPhoto);
    mainPhotoContainer.appendChild(housingWrapp);
  }
});
