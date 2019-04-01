import {types} from './data';
import {createElement} from './util';

const renderOffer = (data) => `
  <li>
    <button class="trip-point__offer">${data.text} +&euro;&nbsp;${data.cost}</button>
  </li>
`;

class Point {
  constructor(data) {
    this._data = data;

    this._onTripPointClick = this._onTripPointClick.bind(this);
  }

  get template() {
    return `
      <article class="trip-point">
        <i class="trip-icon">${types[this._data.type].icon}</i>
        <h3 class="trip-point__title">${this._data.title}</h3>
        <p class="trip-point__schedule">
          <span class="trip-point__timetable">10:00&nbsp;&mdash; 11:00</span>
          <span class="trip-point__duration">1h 30m</span>
        </p>
        <p class="trip-point__price">&euro;&nbsp;${this._data.price}</p>
        <ul class="trip-point__offers">
          ${this._data.offers.map(renderOffer).join('')}
        </ul>
      </article>
    `;
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this.template);
      this.bind();
    }
    return this._element;
  }

  bind() {
    this.element.addEventListener(`click`, this._onTripPointClick);
  }

  unbind() {
    this.element.removeEventListener('click', this._onTripPointClick);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  _onTripPointClick(evt) {
    evt.preventDefault();
    if ( typeof this._onClick === 'function') {
      this._onClick(evt);
    }
  }
};

export default Point;
