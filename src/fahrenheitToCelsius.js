  let fahrenheitToCelsius = (tempF) => {
	let tempC =  ((tempF - 32) * (5/9))
	return tempC
}
 
module.exports = fahrenheitToCelsius