var map = L.map('map').setView([42.34997, -71.08689], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([42.35871, -71.1657]).addTo(map).bindPopup("<b>Community Rowing Boathouse</b><br><button>2008</button><button>Brighton</button><br>Anmahian Winton Architects").openPopup();
var marker = L.marker([42.36018, -71.05511]).addTo(map).bindPopup("<b>Faneuil Hall</b><br>John Smibert & Charles Bulfinch").openPopup();
var marker = L.marker([42.34931, -71.07818]).addTo(map).bindPopup("<b>Boston Public Library</b><br>McKim, Mead & White").openPopup();
var marker = L.marker([42.3604, -71.05799]).addTo(map).bindPopup("<b>Boston City Hall</b><br>Michael McKinnell, Gerhard Kallmann & Edward Knowles").openPopup();
var marker = L.marker([42.35281, -71.04327]).addTo(map).bindPopup("<b>The Institute of Contemporary Art</b><br>Diller Scofidio + Renfro").openPopup();
var marker = L.marker([42.35831, -71.09413]).addTo(map).bindPopup("<b>MIT Chapel</b><br>Eero Saarinen").openPopup();
var marker = L.marker([42.37371, -71.11446]).addTo(map).bindPopup("<b>Carpenter Center for the Visual Arts</b><br>Le Corbusier with Sert, Jackson & Gourley").openPopup();
var marker = L.marker([42.33041, -71.08352]).addTo(map).bindPopup("<b>Bruce C. Bolling Municipal Building</b><br>Mecanoo & Sasaki").openPopup();
var marker = L.marker([42.37783, -71.02821]).addTo(map).bindPopup("<b>East Boston Branch of the Boston Public Library</b><br>William Rawn Associates").openPopup();
var marker = L.marker([42.31641, -71.09242]).addTo(map).bindPopup("<b>Abbotsford</b><br>Alden Frink").openPopup();
var marker = L.marker([42.31964, -71.06003]).addTo(map).bindPopup("<b>James Blake House</b><br>James Blake").openPopup();
var marker = L.marker([42.33664, -71.09685]).addTo(map).bindPopup("<b>Tree House Residence Hall</b><br>ADD Inc").openPopup();
var marker = L.marker([42.33938, -71.09404]).addTo(map).bindPopup("<b>Museum of Fine Arts Boston</b><br>Guy Lowell").openPopup();
var marker = L.marker([42.33814, -71.09905]).addTo(map).bindPopup("<b>Isabella Stewart Gardner Museum</b><br>Willard T. Sears").openPopup();

// faneuil.
//bpl.
//cityhall
//ica
//mit
//carpenter
//bolling
//eastbpl
//abbotsford
//blake
//treehouse
//mfa
//izzystu