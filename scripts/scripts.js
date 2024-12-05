var map = L.map('map').setView([42.34997, -71.08689], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var stadiaLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});
stadiaLayer.addTo(map);

var boathouseMarker = L.marker([42.35871, -71.1657], {tags: ['2000-','Brighton']}).addTo(map).bindPopup("<b>Community Rowing Boathouse</b><br><button>2008</button><button>Brighton</button><br>Anmahian Winton Architects").openPopup();
var faneuilMarker = L.marker([42.36018, -71.05511], {tags: ['1700-1799','North End']}).addTo(map).bindPopup("<b>Faneuil Hall</b><br><button>1742</button><button>North End</button><br>John Smibert & Charles Bulfinch").openPopup();
var bplMarker = L.marker([42.34931, -71.07818], {tags: ['1800-1899','Back Bay']}).addTo(map).bindPopup("<b>Boston Public Library</b><br><button>1895</button><button>Back Bay</button><br>McKim, Mead & White").openPopup();
var cityHallMarker = L.marker([42.3604, -71.05799], {tags: ['1950-1999', 'North End']}).addTo(map).bindPopup("<b>Boston City Hall</b><br><button>1968</button><button>North End</button><br>Michael McKinnell, Gerhard Kallmann & Edward Knowles").openPopup();
var icaMarker = L.marker([42.35281, -71.04327], {tags: ['2000-', 'Seaport']}).addTo(map).bindPopup("<b>The Institute of Contemporary Art</b><br><button>2006</button><button>Seaport</button><br>Diller Scofidio + Renfro").openPopup();
var mitMarker = L.marker([42.35831, -71.09413], {tags: ['1950-1999', 'Cambridge']}).addTo(map).bindPopup("<b>MIT Chapel</b><br><button>1955</button><button>Cambridge</button><br>Eero Saarinen").openPopup();
var carpenterMarker = L.marker([42.37371, -71.11446], {tags: ['1950-1999', 'Cambridge']}).addTo(map).bindPopup("<b>Carpenter Center for the Visual Arts</b><br><button>1963</button><button>Cambridge</button><br>Le Corbusier with Sert, Jackson & Gourley").openPopup();
var bollingMarker = L.marker([42.33041, -71.08352], {tags: ['2000-', 'Roxbury']}).addTo(map).bindPopup("<b>Bruce C. Bolling Municipal Building</b><br><button>2015</button><button>Roxbury</button><br>Mecanoo & Sasaki").openPopup();
var eastbplMarker = L.marker([42.37783, -71.02821], {tags: ['2000-', 'East Boston']}).addTo(map).bindPopup("<b>East Boston Branch of the Boston Public Library</b><br><button>2014</button><button>East Boston</button><br>William Rawn Associates").openPopup();
var abbotsfordMarker = L.marker([42.31641, -71.09242], {tags: ['1800-1899', 'Roxbury']}).addTo(map).bindPopup("<b>Abbotsford</b><br><button>1872</button><button>Roxbury</button><br>Alden Frink").openPopup();
var blakeMarker = L.marker([42.31964, -71.06003], {tags: ['1600-1699', 'Dorchester']}).addTo(map).bindPopup("<b>James Blake House</b><br><button>1661</button><button>Dorchester</button><br>James Blake").openPopup();
var treehouseMarker = L.marker([42.33664, -71.09685], {tags: ['2000-', 'Fenway']}).addTo(map).bindPopup("<b>Tree House Residence Hall</b><br><button>2012</button><button>Fenway</button><br>ADD Inc").openPopup();
var mfaMarker = L.marker([42.33938, -71.09404], {tags: ['1900-1949', 'Fenway']}).addTo(map).bindPopup("<b>Museum of Fine Arts Boston</b><br><button>1909</button><button>Fenway</button><br>Guy Lowell").openPopup();
var izzystuMarker = L.marker([42.33814, -71.09905], {tags: ['1900-1949', 'Fenway']}).addTo(map).bindPopup("<b>Isabella Stewart Gardner Museum</b><br><button>1902</button><button>Fenway</button><br>Willard T. Sears").openPopup();

 function showBoathouse() {
    var boathouseMarker = document.getElementById("boathouse");
    if (boathouseMarker.openPopup = true) {
        boathouseMarker.style.display = "block";
    } else {
        boathouseMarker.style.display = "none";
    }
}

PopupEvent.addEventListener(popupopen, showBoathouse);

var timePeriod = L.control.tagFilterButton({
    data: ['1600-1699','1700-1799','1800-1899','1900-1949','1950-1999','2000-'],
  filterOnEveryClick: true,
  icon: '<i class="fa fa-suitcase"></i>',
}).addTo(map);
//don't forget to change the icons

var neighborhood = L.control.tagFilterButton({
    data: ['Brighton', 'North End', 'Back Bay', 'Seaport', 'Cambridge', 'Roxbury', 'East Boston', 'Dorchester', 'Fenway'],
  filterOnEveryClick: true,
    icon: '<i class="fa fa-pagelines"></i>',
}).addTo(map);

jQuery('.easy-button-button').click(function() {
    target = jQuery('.easy-button-button').not(this);
    target.parent().find('.tag-filter-tags-container').css({
        'display' : 'none',
    });
});

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