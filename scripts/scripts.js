const map = L.map('map').setView([42.34997, -71.08689], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 0,
	maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*const timePeriodFilter = L.control.tagFilterButton({
    data: ['1600-1699','1700-1799','1800-1899','1900-1949','1950-1999','2000-'],
  filterOnEveryClick: true,
  icon: '<i class="fa fa-suitcase"></i>',
}).addTo(map);
//don't forget to change the icons

const neighborhoodFilter = L.control.tagFilterButton({
    data: ['Brighton', 'North End', 'Back Bay', 'Seaport', 'Cambridge', 'Roxbury', 'East Boston', 'Dorchester', 'Fenway'],
  filterOnEveryClick: true,
    icon: '<i class="fa fa-pagelines"></i>',
}).addTo(map);

jQuery('.easy-button-button').click(function() {
    target = jQuery('.easy-button-button').not(this);
    target.parent().find('.tag-filter-tags-container').css({
        'display' : 'none',
    });
});*/


const data = [
{
    id: 'boathouseMarker',
    latlong: [42.35871, -71.1657],
    markerTags: ['2000-','Brighton'],
    markerText: '<b>Community Rowing Boathouse</b><br><button>2008</button><button>Brighton</button><br>Anmahian Winton Architects',
    neighborhood: 'Brighton',
    date: '2008',
    architect: 'Anmahian Winton Architects',
    cardTitle: 'Community Rowing Boathouse',
    cardDescription: 'This sustainable design won the Harleston Parker Medal, awarded to the most beautiful structure in Boston each year. The boathouse is open to all, aiming to bring the Charles River to everyone. ',
    img: src='/images/faneuil.png',
},
{
    id: 'faneuilMarker',
    latlong: [42.36018, -71.05511],
    markerTags: ['1700-1799','North End'],
    markerText: '<b>Faneuil Hall</b><br><button>1742</button><button>North End</button><br>John Smibert & Charles Bulfinch',
    neighborhood: 'North End',
    date: '1742',
    architect: 'John Smibert & Charles Bulfinch',
    cardTitle: 'Faneuil Hall',
    cardDescription: 'lorem ipsum',
    img: src='images/faneuil.png',
},
{
    id: 'bplMarker',
    latlong: [42.34931, -71.07818],
    markerTags: ['1800-1899','Back Bay'],
    markerText: '<b>Boston Public Library</b><br><button>1895</button><button>Back Bay</button><br>McKim, Mead & White',
    neighborhood: 'Back Bay',
    date: '1895',
    architect: 'McKim, Mead & White',
    cardTitle: 'Boston Public Library',
    cardDescription: 'lorem ipsum',
},
{
    id: 'cityHallMarker',
    latlong: [42.3604, -71.05799],
    markerTags: ['1950-1999', 'North End'],
    markerText: '<b>Boston City Hall</b><br><button>1968</button><button>North End</button><br>Michael McKinnell, Gerhard Kallmann & Edward Knowles',
    neighborhood: 'North End',
    date: '1968',
    architect: 'Michael McKinnell, Gerhard Kallmann & Edward Knowles',
    cardTitle: 'City Hall',
    cardDescription: 'lorem ipsum',
},
{
    id: 'icaMarker',
    latlong: [42.35281, -71.04327],
    markerTags: ['2000-', 'Seaport'],
    markerText: '<b>The Institute of Contemporary Art</b><br><button>2006</button><button>Seaport</button><br>Diller Scofidio + Renfro',
    neighborhood: 'Seaport',
    date: '2006',
    architect: 'Diller Scofidio + Renfro',
    cardTitle: 'Institute of Contemporary Art',
    cardDescription: 'lorem ipsum',
},
{
    id: 'mitMarker',
    latlong: [42.35831, -71.09413],
    markerTags: ['1950-1999', 'Cambridge'],
    markerText: '<b>MIT Chapel</b><br><button>1955</button><button>Cambridge</button><br>Eero Saarinen',
    neighborhood: 'Cambridge',
    date: '1955',
    architect: 'Eero Saarinen',
    cardTitle: 'MIT Chapel',
    cardDescription: 'lorem ipsum',
},
{
    id: 'carpenterMarker',
    latlong: [42.37371, -71.11446],
    markerTags: ['1950-1999', 'Cambridge'],
    markerText: '<b>Carpenter Center for the Visual Arts</b><br><button>1963</button><button>Cambridge</button><br>Le Corbusier with Sert, Jackson & Gourley',
    neighborhood: 'Cambridge',
    date: '1963',
    architect: 'Le Corbusier with Sert, Jackson & Gourley',
    cardTitle: 'Carpenter Center for the Visual Arts',
    cardDescription: 'lorem ipsum',
},
{
    id: 'bollingMarker',
    latlong: [42.33041, -71.08352],
    markerTags: ['2000-', 'Roxbury'],
    markerText: '<b>Bruce C. Bolling Municipal Building</b><br><button>2015</button><button>Roxbury</button><br>Mecanoo & Sasaki',
    neighborhood: 'Roxbury',
    date: '2015',
    architect: 'Mecanoo & Sasaki',
    cardTitle: 'Bruce C. Bolling Municipal Building',
    cardDescription: 'lorem ipsum',
},
{
    id: 'eastbplMarker',
    latlong: [42.37783, -71.02821],
    markerTags: ['2000-', 'East Boston'],
    markerText: '<b>East Boston Branch of the Boston Public Library</b><br><button>2014</button><button>East Boston</button><br>William Rawn Associates',
    neighborhood: 'East Boston',
    date: '2014',
    architect: 'William Rawn Associates',
    cardTitle: 'East Boston Branch of the Boston Public Library',
    cardDescription: 'lorem ipsum',
},
{
    id: 'abbotsfordMarker',
    latlong: [42.31641, -71.09242],
    markerTags: ['1800-1899', 'Roxbury'],
    markerText: '<b>Abbotsford</b><br><button>1872</button><button>Roxbury</button><br>Alden Frink',
    neighborhood: 'Roxbury',
    date: '1872',
    architect: 'Alden Frink',
    cardTitle: 'Abbotsford',
    cardDescription: 'lorem ipsum',
},
{
    id: 'blakeMarker',
    latlong: [42.31964, -71.06003],
    markerTags: ['1600-1699', 'Dorchester'],
    markerText: '<b>James Blake House</b><br><button>1661</button><button>Dorchester</button><br>James Blake',
    neighborhood: 'Dorchester',
    date: '1661',
    architect: 'James Blake',
    cardTitle: 'James Blake House',
    cardDescription: 'lorem ipsum',
},
{
    id: 'treehouseMarker',
    latlong: [42.33664, -71.09685],
    markerTags: ['2000-', 'Fenway'],
    markerText: '<b>Tree House Residence Hall</b><br><button>2012</button><button>Fenway</button><br>ADD Inc',
    neighborhood: 'Fenway',
    date: '2012',
    architect: 'ADD Inc',
    cardTitle: 'Tree House Residence',
    cardDescription: 'lorem ipsum',
},
{
    id: 'mfaMarker',
    latlong: [42.33938, -71.09404],
    markerTags: ['1900-1949', 'Fenway'],
    markerText: '<b>Museum of Fine Arts Boston</b><br><button>1909</button><button>Fenway</button><br>Guy Lowell',
    neighborhood: 'Fenway',
    date: '1909',
    architect: 'Guy Lowell',
    cardTitle: 'Museum of Fine Arts',
    cardDescription: 'lorem ipsum',
},
{
    id: 'izzystuMarker',
    latlong: [42.33814, -71.09905],
    markerTags: ['1900-1949', 'Fenway'],
    markerText: '<b>Isabella Stewart Gardner Museum</b><br><button>1902</button><button>Fenway</button><br>Willard T. Sears',
    neighborhood: 'Fenway',
    date: '1902',
    architect: 'Willard T. Sears',
    cardTitle: 'Isabella Steward Gardner Museum',
    cardDescription: 'lorem ipsum',
},
/*
{
    title: '',
    date: '',
    description: '',
    img: /images/whatever.jpg,
    }, */

]

function markerOnClick() {
    console.log('markerOnClick is running');
    console.log(data.id);
    const cardDiv = document.createElement(`div`);
    const cardTitle = document.createElement(`h1`);
    h1.textContent = data.cardTitle;
    cardDiv.appendChild(h1);
    const cardText = document.createElement(`p`);
    p.textContent = data.cardDescription;
    cardDiv.appendChild(p);
    const element = document.getElementsByClassName("welcome");
    element.appendChild(cardDiv);
}

/*or try...
function markerOnClick {
    const ele = document.getElementById('cardcontainer');
    const newDiv = document.createElement('div');
    newDiv.innerHTML =  
    `<h3>data.cardTitle</h3>
    <p>data.cardDescription</p>
    `;
ele.appendChild(newDiv);
}
*/

/*
const p = document.createElement('p');
	p.textcontent = `Thank you ${order.firstName} ${order.lastName} for your purchase of ${order.tickets} ticket(s) for a total of $${order.total}.`;
	p.setAttribute('class', 'highlight');
	orderSummary.appendChild(p);

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

const ele = document.getElementById('cardcontainer');
const newDiv = document.createElement('div');
newDiv.innerHTML =  
    `<h3>data.cardTitle</h3>
    <p>data.cardDescription</p>
    `;
            ele.appendChild(newDiv);
*/
data.forEach(function(data) {
    const marker = L.marker(data.latlong, {tags: [(data.markerTags)]}).on('click', markerOnClick).addTo(map).bindPopup(data.markerText).openPopup();
});
/*
function showCard(data) {
    console.log('showCard is running');
    const cardDiv = document.createElement("div");
    const h1 = document.createElement('h1');
    h1.textContent = data.cardTitle;
    cardDiv.appendChild(h1);
    const p = document.createElement('p');
    p.textContent = data.cardDescription;
    cardDiv.appendChild(p);
    const currentDiv = document.getElementsByClassName("welcome");
    document.body.insertAfter(cardDiv, currentDiv);
}
*/
