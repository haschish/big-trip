import makeFilter from './make-filter';
import makePoint from './make-point';
import {getPoints} from './data';
import {getRandomInt} from './util';

const COUNT_POINTS = 10;
const tripFilterElement = document.querySelector(`.trip-filter`);
const tripDayItemsElement = document.querySelector(`.trip-day__items`);

const dataFilters = [
  {id: `everything`, label: `Everything`, checked: true},
  {id: `future`, label: `Future`},
  {id: `past`, label: `Past`},
];
const pointsData = getPoints(COUNT_POINTS);

const renderFilters = (data) => {
  tripFilterElement.innerHTML = data.map(makeFilter).join(``);
};

const renderPoints = (data) => {
  tripDayItemsElement.innerHTML = data.map(makePoint).join(``);
};

const onTripFiltersChange = () => {
  const data = pointsData.slice(getRandomInt(0, pointsData.length - 1));
  renderPoints(data);
};


renderFilters(dataFilters);
tripFilterElement.addEventListener(`change`, onTripFiltersChange);
