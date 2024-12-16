const map = L.map('map').setView([42.34997, -71.08689], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 0,
	maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const data = [
{
    id: 'boathouseMarker',
    latlong: [42.35871, -71.1657],
    markerTags: 'boathouseMarker',
    markerText: '<b>Community Rowing Boathouse</b><br><button>2008</button><button>Brighton</button><br>Anmahian Winton Architects',
    neighborhood: 'Brighton',
    date: '2008',
    architect: 'Anmahian Winton Architects',
    cardTitle: 'Community Rowing Boathouse',
    cardDescription: 'This sustainable design won the Harleston Parker Medal, awarded to the most beautiful structure in Boston each year. The boathouse is open to all, aiming to bring the Charles River to everyone. ',
    img: './images/boathouse.png',
},
{
    id: 'faneuilMarker',
    latlong: [42.36018, -71.05511],
    markerTags: 'faneuilMarker',
    markerText: '<b>Faneuil Hall</b><br><button>1742</button><button>North End</button><br>John Smibert & Charles Bulfinch',
    neighborhood: 'North End',
    date: '1742',
    architect: 'John Smibert & Charles Bulfinch',
    cardTitle: 'Faneuil Hall',
    cardDescription: 'This boston landmark fully burnt down and has been rebuilt with the original shell. Today, it is still a marketplace like it was in the 18th century.',
    img: './images/faneuil.jpg',
},
{
    id: 'bplMarker',
    latlong: [42.34931, -71.07818],
    markerTags: 'bplMarker',
    markerText: '<b>Boston Public Library</b><br><button>1895</button><button>Back Bay</button><br>McKim, Mead & White',
    neighborhood: 'Back Bay',
    date: '1895',
    architect: 'McKim, Mead & White',
    cardTitle: 'Boston Public Library',
    cardDescription: "The original wing of the BPL at Copley Square was modeled after the Paris Bibliothèque Sainte-Geneviève. The facade features references to Boston's history and a message of knowledge for all.",
    img: './images/bpl.jpg',
},
{
    id: 'cityHallMarker',
    latlong: [42.3604, -71.05799],
    markerTags: 'cityHallMarker',
    markerText: '<b>Boston City Hall</b><br><button>1968</button><button>North End</button><br>Michael McKinnell, Gerhard Kallmann & Edward Knowles',
    neighborhood: 'North End',
    date: '1968',
    architect: 'Michael McKinnell, Gerhard Kallmann & Edward Knowles',
    cardTitle: 'City Hall',
    cardDescription: "Understood by some to be a culmination of tensions between the city and it's people, Boston's city hall is infamous. Love it or hate it, this modern brutalist building is unmistakable.",
    img: './images/cityhall.jpg',
},
{
    id: 'icaMarker',
    latlong: [42.35281, -71.04327],
    markerTags: 'icaMarker',
    markerText: '<b>The Institute of Contemporary Art</b><br><button>2006</button><button>Seaport</button><br>Diller Scofidio + Renfro',
    neighborhood: 'Seaport',
    date: '2006',
    architect: 'Diller Scofidio + Renfro',
    cardTitle: 'Institute of Contemporary Art',
    cardDescription: 'The ICA suspends over the Seaport waterfront, allowing museum patrons to feel as if they are walking over water. The contemporary architectural style mirrors the contemporary art housed within.',
    img: './images/ICA.jpg',
},
{
    id: 'mitMarker',
    latlong: [42.35831, -71.09413],
    markerTags: 'mitMarker',
    markerText: '<b>MIT Chapel</b><br><button>1955</button><button>Cambridge</button><br>Eero Saarinen',
    neighborhood: 'Cambridge',
    date: '1955',
    architect: 'Eero Saarinen',
    cardTitle: 'MIT Chapel',
    cardDescription: "Although unimpressive from the outside, the MIT Chapel designed by famed architect Eero Saarinen brought the avant-garde to MIT's campus. The chapel gives worshippers a sense of being enclosed yet connected with the heavens.",
    img: './images/mitchapel.jpeg',
},
{
    id: 'carpenterMarker',
    latlong: [42.37371, -71.11446],
    markerTags: 'carpenterMarker',
    markerText: '<b>Carpenter Center for the Visual Arts</b><br><button>1963</button><button>Cambridge</button><br>Le Corbusier with Sert, Jackson & Gourley',
    neighborhood: 'Cambridge',
    date: '1963',
    architect: 'Le Corbusier with Sert, Jackson & Gourley',
    cardTitle: 'Carpenter Center for the Visual Arts',
    cardDescription: "As Le Corbusier's only North American structure, the Carpenter Center on Harvard's campus is well-known. The building looks distinctly different depending on which angle it is approached from.",
    img: './images/carpenter.jpg',
},
{
    id: 'bollingMarker',
    latlong: [42.33041, -71.08352],
    markerTags: 'bollingMarker',
    markerText: '<b>Bruce C. Bolling Municipal Building</b><br><button>2015</button><button>Roxbury</button><br>Mecanoo & Sasaki',
    neighborhood: 'Roxbury',
    date: '2015',
    architect: 'Mecanoo & Sasaki',
    cardTitle: 'Bruce C. Bolling Municipal Building',
    cardDescription: 'Right in Nubian Square, this building incorporates the historic Ferdinand Furniture Building. This multipurpose center includes several uses open to the community.',
    img: './images/bolling.jpg',
},
{
    id: 'eastbplMarker',
    latlong: [42.37783, -71.02821],
    markerTags: 'eastbplMarker',
    markerText: '<b>East Boston Branch of the Boston Public Library</b><br><button>2014</button><button>East Boston</button><br>William Rawn Associates',
    neighborhood: 'East Boston',
    date: '2014',
    architect: 'William Rawn Associates',
    cardTitle: 'East Boston Branch of the Boston Public Library',
    cardDescription: 'Aimed at revitalizing oft-overlooked East Boston, this recent construction is a beautiful, functional space open to all.',
    img: './images/eastbpl.jpg',
},
{
    id: 'abbotsfordMarker',
    latlong: [42.31641, -71.09242],
    markerTags: 'abbotsfordMarker',
    markerText: '<b>Abbotsford</b><br><button>1872</button><button>Roxbury</button><br>Alden Frink',
    neighborhood: 'Roxbury',
    date: '1872',
    architect: 'Alden Frink',
    cardTitle: 'Abbotsford',
    cardDescription: 'An example of the high victorian gothic style, this building was once a private residence but is now the Museum of the National Center of Afro-American Artists and on the National Register of Historic Places.',
    img: './images/abbotsford.webp',
},
{
    id: 'blakeMarker',
    latlong: [42.31964, -71.06003],
    markerTags: 'blakeMarker',
    markerText: '<b>James Blake House</b><br><button>1661</button><button>Dorchester</button><br>James Blake',
    neighborhood: 'Dorchester',
    date: '1661',
    architect: 'James Blake',
    cardTitle: 'James Blake House',
    cardDescription: 'This post-medieval house is the oldest house in Boston and on the National Register of Historic Places. ',
    img: './images/blake.webp',
},
{
    id: 'treehouseMarker',
    latlong: [42.33664, -71.09685],
    markerTags: 'treehouseMarker',
    markerText: '<b>Tree House Residence Hall</b><br><button>2012</button><button>Fenway</button><br>ADD Inc',
    neighborhood: 'Fenway',
    date: '2012',
    architect: 'ADD Inc',
    cardTitle: 'Tree House Residence',
    cardDescription: 'This MassArt Residence hall is designed in tandem with the surrounding landscaping and meant to provide dynamic outdoor space for students.',
    img: './images/treehouse.jpg',
},
{
    id: 'mfaMarker',
    latlong: [42.33938, -71.09404],
    markerTags: 'mfaMarker',
    markerText: '<b>Museum of Fine Arts Boston</b><br><button>1909</button><button>Fenway</button><br>Guy Lowell',
    neighborhood: 'Fenway',
    date: '1909',
    architect: 'Guy Lowell',
    cardTitle: 'Museum of Fine Arts',
    cardDescription: "Today's Beaux Arts building is not the earliest iteration of the MFA, but it is certainly the most internationally celebrated. Along with the Copley Boston Public Library, the MFA features murals by John Singer Sargent.",
    img: './images/mfa.jpg',
},
{
    id: 'izzystuMarker',
    latlong: [42.33814, -71.09905],
    markerTags: 'izzystuMarker',
    markerText: '<b>Isabella Stewart Gardner Museum</b><br><button>1902</button><button>Fenway</button><br>Willard T. Sears',
    neighborhood: 'Fenway',
    date: '1902',
    architect: 'Willard T. Sears',
    cardTitle: 'Isabella Stewart Gardner Museum',
    cardDescription: 'Famed for the art heist that took place, the Isabella Stewart Gardner Museum is a combination of influences collected by its namesake. Gardner was extremely hands-on with the construction.',
    img: './images/izzy.jpg',
},
]

function markerOnClick(event) {
    const welcome = document.querySelector(".welcome");
    welcome.querySelectorAll(".card").forEach(card => {welcome.removeChild(card)});
    console.log('markerOnClick is running');
    console.log(event.target.options.tags[0]);
    const infoID = event.target.options.tags[0];
    const pointInfo = data.find(item => {
        return item.id === infoID
    });
    console.log(pointInfo);
    const cardDiv = document.createElement(`div`);
    console.log(cardDiv);
    cardDiv.classList.add('card');
    const h1 = document.createElement('h1');
    console.log(h1);
    h1.textContent = pointInfo.cardTitle;
    cardDiv.appendChild(h1);
    const cardText = document.createElement('p');
    cardText.textContent = pointInfo.cardDescription;
    cardDiv.appendChild(cardText);
    const element = document.getElementsByClassName("welcome");
    element[0].appendChild(cardDiv);
    const cardImage = document.createElement('img');
    cardImage.src = pointInfo.img;
    cardDiv.appendChild(cardImage);
}

data.forEach(function(mapinfo) {
    const marker = L.marker(mapinfo.latlong, {tags: [(mapinfo.markerTags)]});
    marker.on('click', markerOnClick).addTo(map).bindPopup(mapinfo.markerText).openPopup();
    marker.bindPopup
});
