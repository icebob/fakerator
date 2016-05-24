module.exports = function(coordinate, radius, isMetric) {

	function degreesToRadians(degrees) {
		return degrees * (Math.PI / 180.0);
	}

	function radiansToDegrees(radians) {
		return radians * (180.0 / Math.PI);
	}

	function milesToKm(miles) {
		return miles * 0.621371;
	}

	function coordinateWithOffset(coordinate, bearing, distance, isMetric) {
		const R = 6378.137; // Radius of the Earth (http://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html)
		const d = isMetric ? distance : milesToKm(distance); // Distance in km

		let lat1 = degreesToRadians(coordinate.latitude); //Current lat point converted to radians
		let lon1 = degreesToRadians(coordinate.longitude); //Current long point converted to radians

		let lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(bearing));

		let lon2 = lon1 + Math.atan2(
		Math.sin(bearing) * Math.sin(d / R) * Math.cos(lat1),
		Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));

		// Keep longitude in range [-180, 180]
		if (lon2 > degreesToRadians(180)) {
			lon2 = lon2 - degreesToRadians(360);
		} else if (lon2 < degreesToRadians(-180)) {
			lon2 = lon2 + degreesToRadians(360);
		}

		return [radiansToDegrees(lat2), radiansToDegrees(lon2)];
	}

	// If there is no coordinate, the best we can do is return a random GPS coordinate.
	if (coordinate === undefined) {
		return this.address.geoLocation();
	}
	radius = radius || 10.0;
	isMetric = isMetric || true;

	// TODO: implement either a gaussian/uniform distribution of points in cicular region.
	// Possibly include param to function that allows user to choose between distributions.

	// This approach will likely result in a higher density of points near the center.
	let randomCoord = coordinateWithOffset(coordinate, degreesToRadians(this.random.number(360)), radius, isMetric);
	
	return {
		latitude: randomCoord[0],
		longitude: randomCoord[1]
	};
	
};