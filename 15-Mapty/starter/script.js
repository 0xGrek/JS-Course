'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let map, mapEvent;

class Workout {
  date = new Date();
  id = this._uniqueID();
  type = `running`;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
    this.type = `running`;
  }
  _uniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); // besides return of calcPace
  }

  calcPace() {
    // meter/min
    this.pace = this.duration / (this.distance / 60);
    return this.pace;
  }
}
class Cycling extends Workout {
  type = `cycling`;
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.type = `cycling`;
    this.calcSpeed(); // besides return of calcSpeed
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
  }
}

////////////////////////
// App Arhitecture
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // Private propetry
  #map;
  #mapEvent;
  #workouts = [];

  // half while the page is loading, and we use immediately htis constructor
  constructor() {
    this._getPosition;
    // Change el of form
    form.addEventListener(`submit`, this._newWorkout.bind(this));
    // Change type
    inputType.addEventListener(`change`, this._toggleElevationFiled);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`Could not get your position`);
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);
    // style map
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    //  Handling cliks on map
    this.#map.on(`click`, this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove(`hidden`);
    inputDistance.focus();
  }

  _toggleElevationFiled() {
    inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
  }

  _newWorkout(e) {
    e.preventDefault();
    // the best way
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    // Only > 0
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // Get data doem from
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout runing, create runing ogject
    if (type === `running`) {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        //  !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(elevation)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert(`Inputs have to be positive numbers`);

      workout = new Running([lat, lng], distance, duration, cadence);
      console.log(workout);
    }
    // If workout cycling, create runing ogject
    if (type === `cycling`) {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert(`Inputs have to be positive numbers`);

      workout = new Cycling([lat, lng], distance, duration, elevation);
      console.log(workout);
    }
    this.#workouts.push(workout);
    console.log(workout);
    // Add new object to workout array

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);
    // Render workout on list

    // Hide form + clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        ``;
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          // set when we ckick
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          // Change color popup
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`Workout`)
      .openPopup();
  }
}

const app = new App();
app._getPosition();
