export const getRandomInt = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export const getRandomItem = (array) => array[getRandomInt(0, array.length - 1)];

export const getRandomBoolean = () => Boolean(Math.round(Math.random()));
