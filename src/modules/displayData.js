const locationText = document.querySelector('[data-location]');
const weatherDescription = document.querySelector('[data-weather-description]');
const wind = document.querySelector('[data-wind]');
const temperature = document.querySelector('[data-temperature]');
const feelsLike = document.querySelector('[data-feels-like]');
const humidity = document.querySelector('[data-humidity');

export function displayData(data) {
	displayLocation(data.location);
	displayTemperature(data);
	displayWind(data);
	weatherDescription.innerText = `${data.current.condition.text}`;
	humidity.innerText = `${data.current.humidity}%`;
}

function displayLocation(location) {
	var locationString;
	if (location.country === 'United States of America') {
		locationString = `${location.name}, ${location.region.substring(0, 2).toUpperCase()}`;
	} else {
		locationString = `${location.name}, ${location.country}`;
	}
	locationText.innerText = locationString;
}

function displayTemperature(data) {
	var tempString;
	var feelsLikeString;
	if (data.location.country === 'United States of America') {
		tempString = `${Math.round(data.current.temp_f)}\xB0 F`;
		feelsLikeString = `${Math.round(data.current.feelslike_f)}\xB0 F`;
	} else {
		tempString = `${Math.round(data.current.temp_c)}\xB0 C`;
		feelsLikeString = `${Math.round(data.current.feelslike_c)}\xB0 C`;
	}
	feelsLike.innerText = feelsLikeString;
	temperature.innerText = tempString;
}

function displayWind(data) {
	var windString;
	if (data.location.country === 'United States of America') {
		windString = `${data.current.wind_mph} mph`;
	} else {
		windString = `${data.current.wind_kph} kph`;
	}
	wind.innerText = windString;
}
