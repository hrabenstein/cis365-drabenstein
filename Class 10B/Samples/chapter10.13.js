if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(haveLocation,
					     geoError);
} else {
    // geolocation not supported or accepted
    ...
}
function haveLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    const accuracy = position.coords.accuracy;
    // now do something with this information
    ...
}
function geoError(error) { ... }
