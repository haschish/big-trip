import {getRandomInt, getRandomBoolean, getRandomItem} from './util';

export const types = {
  taxi: {label: `Taxi`, icon: `🚕`},
  bus: {label: `Bus`, icon: `🚌`},
  train: {label: `Train`, icon: `🚂`},
  // ship: {label: `Ship`, icon: `🛳️`},️
  transport: {label: `Transport`, icon: `🚊`},
  drive: {label: `Drive`, icon: `🚗`},
  flight: {label: `Flight`, icon: `✈️`},
  checkin: {label: `Check-in`, icon: `🏨`},
  sightseeing: {label: `Sightseeing`, icon: `🏛️`},
  restaurant: {label: `Restaurant`, icon: `🍴`},
};

const cities = [
  `Amsterdam`,
  `Geneva`,
  `Chamonix`,
];

const offers = [
  `Add luggage`,
  `Switch to comfort class`,
  `Add meal`,
  `Choose seats`
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

const getType = () => {
  return getRandomItem(Object.keys(types));
};

const getTitle = (type) => {
  return `${types[type].label} to ${getRandomItem(cities)}`;
};

const getOffers = () => {
  const copyOffers = offers.slice();
  const array = Array.from({length: getRandomInt(0,2)});
  return array.map(() => {
    const randomIndex = getRandomInt(0, copyOffers.length - 1);
    return {
      text: copyOffers.splice(randomIndex, 1),
      cost: getRandomInt(10, 100)
    }
  });
};

const getDescription = () => {
  return Array.from({length: getRandomInt(1, 3)})
    .map(() => getRandomInt(descriptions));
}

export const getPoint = () => {
  const type = getType();
  return {
    id: ``,
    type: getType(),
    title: getTitle(type),
    price: getRandomInt(10, 100),
    offers: getOffers(),
    description: getDescription()
  }
};

export const getPoints = (number) => {
  return Array.from({length: number}).map(getPoint);
}
