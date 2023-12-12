import { generateRandomNumber, getRandomLocation } from './auxiliary-functions.js';

//Create author object
let numbersArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

const createAuthors = () => {
  numbersArray = numbersArray.sort(() => Math.random() - 0.5);
  const avatarNumber = numbersArray.pop();

  const authorObject = {
    avatar: `img/avatars/user${avatarNumber}.png`,
  };

  return authorObject;
};

//Create offers
let titlesArray = ['Ocean View Retreat', 'City Lights Suite', 'Rustic Mountain Cabin', 'Romantic Garden Oasis', 'Tech-Driven Comfort', 'Art Deco Elegance', 'Family Adventure Hub', 'Tranquil Spa Haven', 'Boho Chic Loft', 'Coastal Luxe Room'];
let typeArray = ['Palace', 'Flat', 'House', 'Bungalow', 'Hotel'];
let timeArray = ['12:00', '13:00', '14:00'];
let featuresArray = ['Wi-fi', 'Dishwasher', 'Parking', 'Washer', 'Elevator', 'Conditioner'];
let descriptionArray = ['Морской люкс с балконом и мраморной ванной.', 'Стильный скандинавский номер с видом во внутренний двор.', 'Элегантный арт-деко студио с мини-кухней и пастельными оттенками.', 'Современный бизнес-номер с рабочим уголком и ярким естественным светом.', 'Ретро люкс с мебелью 60-х годов и тематическим декором.', 'Эксклюзивный номер с панорамным видом на горы и камином.', 'Эко-дизайн с природными материалами и экологической мебелью.', 'Семейный номер с игровой зоной и раздельными спальнями.', 'Атмосферный шале с деревянной мебелью и уютным камином.', 'Минималистичный номер с современным дизайном и естественным светом.'];
let photoArray = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createOffers = () => {
  titlesArray = titlesArray.sort(() => Math.random() - 0.5);
  const offerTitle = titlesArray.pop();
  typeArray = typeArray.sort(() => Math.random() - 0.5);
  timeArray = timeArray.sort(() => Math.random() - 0.5);
  featuresArray = featuresArray.sort(() => Math.random() - 0.5);
  descriptionArray = descriptionArray.sort(() => Math.random() - 0.5);
  photoArray = photoArray.sort(() => Math.random() - 0.5);

  const offerObject = {
    title: offerTitle,
    address: {
      lat: getRandomLocation(35.65000, 35.70000),
      lng: getRandomLocation(139.70000, 139.80000),
    },
    price: generateRandomNumber(0, 10000),
    type: typeArray[0],
    rooms: generateRandomNumber(1, 5),
    guests: generateRandomNumber(1, 25),
    checkin: timeArray[0],
    checkout: timeArray[2],
    features: featuresArray.slice(generateRandomNumber(0, 6)),
    description: descriptionArray[0],
    photos: photoArray.slice(generateRandomNumber(0, 3)),
  };

  return offerObject;
};

//Create location
const createLocation = () => {
  const locationObject = {
    lat: getRandomLocation(35.65000, 35.70000),
    lng: getRandomLocation(139.70000, 139.80000),
  };

  return locationObject;
};

//Create main object
const createMainObject = () => {
  const mainObject = {
    author: createAuthors(),
    offer: createOffers(),
    location: createLocation(),
  };

  return mainObject;
};

const randomOffers = Array.from({ length: 10 }, createMainObject);

export { randomOffers };
