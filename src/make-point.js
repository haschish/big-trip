import {types} from './data';

const renderOffer = (data) => `
  <li>
    <button class="trip-point__offer">${data.text} +&euro;&nbsp;${data.cost}</button>
  </li>
`;

export default (data) => {
  return `
    <article class="trip-point">
      <i class="trip-icon">${types[data.type].icon}</i>
      <h3 class="trip-point__title">${data.title}</h3>
      <p class="trip-point__schedule">
        <span class="trip-point__timetable">10:00&nbsp;&mdash; 11:00</span>
        <span class="trip-point__duration">1h 30m</span>
      </p>
      <p class="trip-point__price">&euro;&nbsp;${data.price}</p>
      <ul class="trip-point__offers">
        ${data.offers.map(renderOffer).join('')}
      </ul>
    </article>
  `;
};
