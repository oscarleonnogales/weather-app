const API_KEY = '1986480656ec490d950204923202611';

export async function getWeatherData(location) {
	try {
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}`);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}
