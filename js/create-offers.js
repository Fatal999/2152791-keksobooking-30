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
let descriptionArray = ['Coastal charm, king bed, stunning ocean panorama, private balcony.', 'Modern design, queen bed, floor-to-ceiling windows, vibrant urban energy.', 'Wooden accents, stone fireplace, mountain views, cozy ambiance.', 'Four-poster bed, private patio, candlelit intimacy, blooming garden.', 'Smart lighting, automated curtains, high-tech amenities, deluxe modern stay.', 'Vintage furnishings, bold patterns, rich colors, glamorous Art Deco.', 'Spacious layout, bunk beds, gaming console, family-friendly fun.', 'King bed, private sauna, calming colors, serene spa-inspired retreat.', 'Eclectic charm, vibrant colors, mismatched furniture, free-spirited ambiance.', 'Nautical themes, plush queen bed, beachside views, stylish comfort.'];
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
    price: generateRandomNumber(100, 1000000),
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
