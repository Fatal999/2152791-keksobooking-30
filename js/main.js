//Generate numbers
// const generateRandomNumber = (min, max) => {
//   const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
//   const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

//Create author object
const mass = [];
const createAuthor = () => {
  let numbersArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
  numbersArray = numbersArray.sort(() => Math.random() - 0.5);

  const avatarNumber = numbersArray.pop();
  const authorObject = {
    avatar: `img/avatars/user${avatarNumber}.png`,
  };

  mass.push(authorObject);
};
createAuthor();

//Create offers
