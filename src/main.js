import makeFilter from './make-filter';
import makePoint from './make-point';

const MAX_POINTS = 10;
const tripFilterElement = document.querySelector(`.trip-filter`);
const tripDayItemsElement = document.querySelector(`.trip-day__items`);

const getRandomInt = (max = Number.MAX_SAFE_INTEGER) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const renderFilters = (data) => {
  const filters = data.map(makeFilter);
  tripFilterElement.innerHTML = filters.join(``);
};

const renderPoints = (num) => {
  const points = Array.from({length: num}).map(makePoint);
  tripDayItemsElement.innerHTML = points.join(``);
};

const onTripFiltersChange = () => {
  renderPoints(getRandomInt(MAX_POINTS));
};


const dataFilters = [
  {id: `everything`, label: `Everything`, checked: true},
  {id: `future`, label: `Future`},
  {id: `past`, label: `Past`},
];
renderFilters(dataFilters);
tripFilterElement.addEventListener(`change`, onTripFiltersChange);
