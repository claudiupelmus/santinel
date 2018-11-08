mapboxgl.accessToken = "pk.eyJ1IjoiY2xhdWRpdXBlbG11cyIsImEiOiJjajRsN2lmcHQweGF6MzNvN2czOThsNzQyIn0.9aykt2rnjn6-lo0z0cf5TA";

var map = new mapboxgl.Map({
	container: "map",
	style: 'mapbox://styles/mapbox/streets-v9', // change streets with satellite for more detailed view
	center: [25.618961204475585, 45.64778825],  // default to Calea Bucuresti 10B, Brasov, Allian Tiriac Building
	zoom: 18
});

map.addControl(new mapboxgl.NavigationControl()); // add controls
