// Initialize and add the map
function initMap() {
  // The location of New York
  const ny = {
    lat: 40.7128,
    lng: -74.0060
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ny,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: ny,
    map: map,
  });
}
