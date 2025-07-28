function convertCelsius(tempF) {
	return (tempF - 32) * 5 / 9
}

function describeTemperature(tempF) {
	if (tempF < 0) {
		return 'very cold'
	} else if (tempF < 20) {
		return 'cold'
	} else if (tempF < 30) {
		return 'warm'
	} else if (tempF < 40) {
		return 'hot'
	} else if (tempF >= 40) {
		return 'very hot'
	}
}

let inputTempF = Number(prompt('What\'s the weather like outside? Enter in Fahrenheit:'))
if (isNaN(inputTempF)) {
	console.log('Invalid input. Enter numbers only!');
} else {
	console.log(`${inputTempF} Fahrenheit is equal to ${convertCelsius(inputTempF).toFixed(2)} Celsius and it is ${describeTemperature(inputTempF)}`);
}
