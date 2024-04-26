// Define initial map center and zoom level
const initialCenter = [5.388990842525687, 6.991157703702543]; // Hall of Excellence
const initialZoom = 20;

// Map initialization code here
const map = L.map("map").setView(initialCenter, initialZoom);
L.tileLayer("", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

var marker = L.marker(initialCenter)
  .addTo(map)
  .bindPopup("Hall of Excellence.<br> 1000 caps.")
  .openPopup();
