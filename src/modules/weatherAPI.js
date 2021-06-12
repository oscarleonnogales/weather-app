const API_KEY = 'a13cd2f0655843dba84185004210506';
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getWeatherData(location) {
	try {
		const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(`Error: ${err}`);
	}
}
