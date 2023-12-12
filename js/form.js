const mainForm = document.querySelector('.ad-form');
const photoForm = document.querySelector('.ad-form-header');
const addElementForm = document.querySelectorAll('.ad-form__element');

const fitersForm = document.querySelector('.map__filters');
const houseTypeFilter = document.getElementById('housing-type');
const housePriceFilter = document.getElementById('housing-price');
const houseRoomsFilter = document.getElementById('housing-rooms');
const houseGuestsFilter = document.getElementById('housing-guests');
const houseFeaturesFilter = document.getElementById('housing-features');

const disabledForm = () => {
  mainForm.classList.add('ad-form--disabled');
  photoForm.disabled = true;
  addElementForm.forEach((element) => {
    element.disabled = true;
  });

  fitersForm.classList.add('ad-form--disabled');
  houseTypeFilter.disabled = true;
  housePriceFilter.disabled = true;
  houseRoomsFilter.disabled = true;
  houseGuestsFilter.disabled = true;
  houseFeaturesFilter.disabled = true;
};

const enabledForm = () => {
  mainForm.classList.remove('ad-form--disabled');
  photoForm.disabled = false;
  addElementForm.forEach((element) => {
    element.disabled = false;
  });

  fitersForm.classList.remove('ad-form--disabled');
  houseTypeFilter.disabled = false;
  housePriceFilter.disabled = false;
  houseRoomsFilter.disabled = false;
  houseGuestsFilter.disabled = false;
  houseFeaturesFilter.disabled = false;
};

export { disabledForm, enabledForm };
