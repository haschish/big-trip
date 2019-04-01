import makeFilter from './make-filter';
import makePoint from './make-point';
import {getPoints} from './data';
import {getRandomInt} from './util';
import Point from './point';
import PointEdit from './point-edit';

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

const getPointClickHandler = (data) => {
  return () => {
    const pointEdit = new PointEdit(item);
    tripDayItemsElement.replaceChild(pointEdit.element, point.element);
  }
}

const renderPoints = (data) => {
  tripDayItemsElement.innerHTML = ``;
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const point = new Point(item);
    point.onClick = () => {
      const pointEdit = new PointEdit(item);
      pointEdit.onSave = () => {
        tripDayItemsElement.replaceChild(point.element, pointEdit.element);
      }
      tripDayItemsElement.replaceChild(pointEdit.element, point.element);
    };
    fragment.appendChild(point.element);
  });
  tripDayItemsElement.appendChild(fragment);
};

const onTripFiltersChange = () => {
  const data = pointsData.slice(getRandomInt(0, pointsData.length - 1));
  renderPoints(data);
};


renderFilters(dataFilters);
tripFilterElement.addEventListener(`change`, onTripFiltersChange);
