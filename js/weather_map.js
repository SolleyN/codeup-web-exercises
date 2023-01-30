
"use strict";

//mapbox js

mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/mapbox/dark-v11',
center: [-98.4916, 29.4252], 
zoom: 1.8, 
projection: "globe",
});

map.on('style.load', () => {

    // Custom atmosphere styling

    map.setFog({
    'color': 'rgb(52, 186, 235)', // blue fog 
    'high-color': 'rgb(36, 92, 223)', // Blue sky 
    'horizon-blend': 0.1 // Exaggerate atmosphere 
    });
     
    map.addSource('mapbox-dem', {
    'type': 'raster-dem',
    'url': 'mapbox://mapbox.terrain-rgb'
    });
     
    map.setTerrain({
    'source': 'mapbox-dem',
    'exaggeration': 1.5
    });

    // drops marker on san antonio
    });
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);
function onDragEnd() {
    map.addControl(geocode);
   
    
}

// grabs user coordinates and stores them in userLocation
$(`#search`).on(`click`, function(){
let userLocation = $(`#location`).val();
geocode(userLocation, keys.mapbox).then(function (result){
  map.setCenter(result);
  map.setZoom(9);

 
// calls the weather api 

  $.get('https://api.openweathermap.org/data/2.5/forecast', {
      lat: result[1],
      lon: result[0],
      appid: keys.weather,
      units: 'imperial'

  }).done(function(data){

      // displays weather of selected location and displays in cards

      let html = '';
      for (let i = 0; i < data.list.length; i += 8) {
        
          html += `<div class="card m-3 bg-dark text-light border border-secondary">
          <div class="card-header">
          <div>${data.list[i].dt_txt.slice(0, 10)}</div>
          </div>
      <ul class="list-group ">
          <li class="list-group-item --bs-info-text text-dark">High: ${parseInt(data.list[i].main.temp_max)} Low: ${parseInt(data.list[i].main.temp_min)}</li>
          <li class="list-group-item --bs-info-text text-dark"> Weather Description: ${(data.list[i].weather[0].description)}</li>
          <li class="list-group-item --bs-info-text text-dark"> Humidity Levels: ${parseInt(data.list[i].main.humidity)}</li>
          <li class="list-group-item --bs-info-text text-dark"> Barometric Pressure: ${(data.list[i].main.pressure)}</li>
      </ul>
      </div>`;
      }
      $('#weather').html(html);
      
      

  }).fail(function (jqXhr, status, error) {
      console.log(jqXhr);
      console.log(status);
      console.log(error);
  });
});
});
