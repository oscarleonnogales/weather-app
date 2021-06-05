import { displayData } from './modules/displayData.js';
import { getWeatherData } from './modules/weatherAPI.js';

const form = document.querySelector('[data-input-form]');
const locationInput = document.querySelector('[data-location-input]');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	try {
		const location = locationInput.value;
		const data = await getWeatherData(location);
		displayData(data);
	} catch (err) {
		locationInput.classList.add('invalid');
		locationInput.setAttribute('placeholder', 'invalid location');
	}
	locationInput.value = null;
});

locationInput.addEventListener('input', () => {
	locationInput.classList.remove('invalid');
	locationInput.setAttribute('placeholder', 'search location');
});

getWeatherData('Seattle').then((data) => displayData(data));
