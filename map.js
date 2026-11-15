// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Set Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbGNoZW42IiwiYSI6ImNtd2gyNGltODBucjAzMG83cGozdXRnbGoifQ.lm_EXGiCb24x5DOke6ofyQ';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});