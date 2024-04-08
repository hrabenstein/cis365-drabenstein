// define API endpoints and other element references
const domain = 'http://randyconnolly.com/funwebdev/3rd/api/travel/';
const countryAPI = domain + 'countries.php';
const cityAPI = domain + 'cities.php?isoimages=';
const imageAPI = domain + 'images.php?city=';
// after DOM is loaded then ...
document.addEventListener("DOMContentLoaded", () => {
    // 1. fetch small list of countries with images
    fetch(countryAPI)
	.then( response => response.json() )
	.then( countries => {
	    // 2. then fetch the cities with images for first country
	    fetch(cityAPI + countries[0].iso)
		.then( response => response.json() )
		.then( cities => {
		    // 3. then fetch the images for first city
		    fetch(imageAPI + cities[0].id)
			.then( response => response.json() )
			.then( images => {
			    // 4. then finally display the first image
			    result.textContent = images[0].description;
			})
			.catch( error => { console.error(error) } );
		})
		.catch( error => { console.error(error) } );
	})
	.catch( error => { console.error(error) } );
});
