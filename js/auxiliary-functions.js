//Generate numbers
const generateRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Generate location
const getRandomLocation = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(5);
}

export { generateRandomNumber, getRandomLocation };
