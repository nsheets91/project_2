// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.opens
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



// Initialize all of the LayerGroups we'll be using
var layers = {
  2005: new L.LayerGroup(),
  2010: new L.LayerGroup(),
  2015: new L.LayerGroup(),
  2019: new L.LayerGroup(),
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [42.88, -97.38],
  zoom: 5,
  layers: [
    layers.2005,
    layers.2010,
    layers.2015,
    layers.2019,
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  "Tour 2005": layers.2005,
  "Tour 2010": layers.2010,
  "Tour 2015": layers.2015,
  "Tour 2019": layers.2019,
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
  2005: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  2010: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  2015: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  2019: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
};

// Perform an API call to the Citi Bike Station Information endpoint
// d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(function(infoRes) {
// 
  //When the first API call is complete, perform another call to the Citi Bike Station Status endpoint
  // d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_status.json").then(function(statusRes) {
    // var updatedAt = infoRes.last_updated;
    // var stationStatus = statusRes.data.stations;
    // var stationInfo = infoRes.data.stations;
// 
    //Create an object to keep of the number of markers in each layer
    var city_counts = {
      2005: 0,
      2010: 0,
      2015: 0,
      2019: 0,
    };
// 
    //Initialize a stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station c
    // var stationStatusCode;
// 
    //Loop through the stations (they're the same size and have partially matching data)
    // for (var i = 0; i < stationInfo.length; i++) {
// 
      //Create a new station object with properties of both station objects
      // var station = Object.assign({}, stationInfo[i], stationStatus[i]);
      //If a station is listed but not installed, it's coming soon
      // if (!station.is_installed) {
        // stationStatusCode = "COMING_SOON";
      // }
      //If a station has no bikes available, it's empty
      // else if (!station.num_bikes_available) {
        // stationStatusCode = "EMPTY";
      // }
      //If a station is installed but isn't renting, it's out of order
      // else if (station.is_installed && !station.is_renting) {
        // stationStatusCode = "OUT_OF_ORDER";
      // }
      //If a station has less than 5 bikes, it's status is low
      // else if (station.num_bikes_available < 5) {
        // stationStatusCode = "LOW";
      // }
      //Otherwise the station is normal
      // else {
        // stationStatusCode = "NORMAL";
      // }
// 
      //Update the station count
      // stationCount[stationStatusCode]++;
      //Create a new marker with the appropriate icon and coordinates
      // var newMarker = L.marker([station.lat, station.lon], {
        // icon: icons[stationStatusCode]
      // });
// 
      //Add the new marker to the appropriate layer
      // newMarker.addTo(layers[stationStatusCode]);
// 
      //Bind a popup to the marker that will  display on click. This will be rendered as HTML
      // newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available 
    // }
// 
    //Call the updateLegend function, which will... update the legend!
    // updateLegend(updatedAt, stationCount);
  // });
// });
// 
//Update the legend's innerHTML with the last updated time and station count
 function updateLegend(time, stationCount) {
   document.querySelector(".legend").innerHTML = [
    "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
    "<p class='2005'>Tour 2005: " + city_count.2005 + "</p>",
    "<p class='coming-soon'>Stations Coming Soon: " + city_count.2010 + "</p>",
    "<p class='empty'>Empty Stations: " + city_count.2015 + "</p>",
   ].join("");
 }
updateLegend();
