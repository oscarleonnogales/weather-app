export async function getWeatherData(location) {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}`
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(`Error: ${err}`);
	}
}
